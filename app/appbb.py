#!/usr/bin/python
# -*- coding: utf-8 -*-


#===
# name  bigbox-server.py
# date: 2013SEP07
# prog: pr
# desc: simple web server using Bottle
#===


#---
# TODO
#     first read <http://docs.python.org/2/library/sqlite3.html#sqlite3.Cursor>
#     testing:
#         keys in returns
#         test for unicode
#        
#---



import ast
import time
import datetime


import bottle
from bottle import route
from bottle import Bottle
from bottle import install
from bottle import request
from bottle import response
from bottle.ext import sqlite


import duckduckgo


# --- test TODO test for failure ---
app = Bottle(__name__)
plugin = sqlite.Plugin(dbfile='database/bigbox.db')  
app.install(plugin)
# --- test ---


# db_datetime_utc: return epoch in utc
def db_datetime_utc():
    """store datetime in UTC epoch format"""
    t = datetime.datetime.utcnow()
    return time.mktime(t.timetuple())


#--- routes ---
# HACK WARNING: I'm tired, this is untested & potentially 
#               insecure code. no correction, this is naive 
#               & insecure code.
#

#---
# name: entry
# desc: return all entries in entry table
# test: curl -i http://localhost:8080/bb/api/v0.1/e
#---
@app.route('/bb/api/v1.0/e', method = 'GET')            
@app.route('/bb/api/v1.0/e/all', method = 'GET')
def get_entry(db):
    row = db.execute('SELECT entry.* FROM entry ORDER BY entry.date_time DESC')
    items = row.fetchall()
    data = []
    for item in items:
        keys = item.keys()
        d = {}
        for key in keys:
            d[key] = item[key]
        data.append(d)
    response.set_header('Access-Control-Allow-Origin', 'http://127.0.0.1:8080')
    if data:
        return {'e': data}
    return {'e': False}

#---
# name: entry_id
# desc: return entry by entry.id
# test: curl -i http://localhost:8080/bb/api/v1.0/e/10  
#---
@app.route('/bb/api/v1.0/e/<entry_id:int>', method = 'GET')
@app.route('/bb/api/v1.0/e/id/<entry_id:int>', method = 'GET')
def get_entry_id(entry_id, db):
    row = db.execute('SELECT id, line, date_time, length, flagged \
                      from entry WHERE entry.id = ?', (entry_id,))
    entry = row.fetchone()
    response.set_header('Access-Control-Allow-Origin', 'http://127.0.0.1:8080')
    if len(entry) > 0:
        return  {'e': [dict(id=entry[0],
                           line=entry[1],
                           date_time=entry[2],
                           length=entry[3],
                           flagged=entry[4])]}

    return {'e': False}
#---
# name: add_entry
# desc: add new entry
# test: curl -i -H "Content-Type: application/json" -X POST -d 
#   '{"line":"hey does this thing work @tyabblemsons http://duckduckgo.com",}
#   http://localhost:8080/bb/api/v1.0/e
#---
@app.route('/bb/api/v1.0/e', method = 'POST')
@app.route('/bb/api/v1.0/e/new', method = 'POST')
def add_entry(db):
    """add new entry"""
    for item in bottle.request.params.items():
        for i in item:
            if i: 
                # calcuate datetime and length
                line = i[0]
                dt = db_datetime_utc()
                length = len(i)
                c = db.execute('INSERT INTO entry (line, length, date_time, flagged) \
                                VALUES (?, ?, ?, ?)', (i, length, dt, 0))
                if c:
                    return {'e': True}
                else:
                    return {'e': False}
    return {'e': False}
#---
# name: del_entry
# desc: delete entry
# test: curl -i -H "Content-Type: application/json" -X 
#       DELETE http://localhost:8080/bb/api/v1.0/e/1
#---
@app.route('/bb/api/v1.0/e/<entry_id:int>', method = 'DELETE')
@app.route('/bb/api/v1.0/e/delete/<entry_id:int>', method = 'DELETE')
def del_entry(entry_id, db):
    """delete an entry by entry_id or F"""
    row = db.execute('UPDATE entry SET flagged = 1 WHERE id LIKE ?', (entry_id,))
    row = None
    row = db.execute('SELECT entry.flagged FROM entry WHERE entry.id = ?', 
                     (entry_id,))
    entry = row.fetchone()
    if entry:
        if entry[0] == 1: return {'e': True}
    else: return {'e': False}
#---
# name: update_entry
# desc: update exiting entry
# test: curl -i -H "Content-Type: application/json" -X POST 
#       -d "{'line':'is a great place', 'date_time':1378516759}"
#       http://localhost:8080/bb/api/v1.0/e/3
#---
@app.route('/bb/api/v1.0/e/<entry_id:int>', method = 'POST')
@app.route('/bb/api/v1.0/e/update/<entry_id:int>', method = 'POST')
def update_entry(entry_id, db):
    """update current entry by entry.id or F"""
    for line_item in bottle.request.params.items(): # TODO how to get specific fields back
        item = ast.literal_eval(line_item[0])
        if item: 
            c = db.execute("UPDATE entry SET line = ?, length = ?, \
                        date_time = ? \
                        WHERE id = ?", \
                        (item['line'], 
                         item['length'], 
                         item['date_time'], 
                         entry_id))
            return {'e': True} if c else {'e': False}
    return {'e': False}
#
# ---
#

#---
# name: duckduckgo
# desc: return all duckduckgo details in duckduckgo table
# test: curl -i http://localhost:8080/bb/api/v1.0/d
#---
@app.route('/bb/api/v1.0/d', method = 'GET')            
@app.route('/bb/api/v1.0/d/all', method = 'GET')
def get_entry(db):
    row = db.execute('SELECT duckduckgo.* FROM duckduckgo ORDER BY duckduckgo.id DESC')
    items = row.fetchall()
    data = []
    for item in items:
        keys = item.keys()
        d = {}
        for key in keys:
            d[key] = item[key]
        data.append(d)
    response.set_header('Access-Control-Allow-Origin', 'http://127.0.0.1:8080')
    if data:
        return {'d': data}
    return {'d': False}
#---
# name: duckduckgo_id
# desc: return ddg by ddg.id
# test: curl -i http://127.0.0.1:8081/bb/api/v1.0/d/10  
#---
@app.route('/bb/api/v1.0/d/<ddg_key>', method = 'GET')
def get_entry_id(ddg_key, db):
    if not ddg_key:
        return get_entry(db)
    else:
        row = db.execute('SELECT id, key, heading, answer, \
                                 definition, abstract \
                          FROM duckduckgo \
                          WHERE duckduckgo.key = ?', (ddg_key,))
        entry = row.fetchone()
        if entry: 
            if len(entry) > 0:
                response.set_header('Access-Control-Allow-Origin', 
                                    'http://127.0.0.1:8080')
                return  {'d': [dict(id=entry[0],
                               key=entry[1],
                               heading=entry[2],
                               answer=entry[3],
                               definition=entry[4],
                               abstract=entry[5])]}
        else:
            is_json = True
            safe_search = True
            is_callback = False
            is_pretty = True
            no_html = True
            no_redirect = True
            skip_disambig = True

            # selection options
            # bloody important, no callback
            # inserts shite into json string, 
            # can't parse
            if is_json:
                if is_pretty:
                    is_pretty = True
                else: 
                    is_pretty = False
                if is_callback:
                    is_callback = True
                else:
                    is_callback = False

            ddg = duckduckgo.Duckduckgo()
            ddg.build_parms(ddg_key, is_json,
                       safe_search,
                       is_callback,
                       is_pretty,
                       no_html,
                       no_redirect,
                       skip_disambig)
            ddg.build_query_url()
            data = ddg.request()

            heading = ""
            answer = ""
            definition = ""
            abstract = ""
            if not data:
                print("error: can't request data")
                response.set_header('Access-Control-Allow-Origin', 
                                    'http://127.0.0.1:8080')
                return {'d': False}
            else:
                pydat = duckduckgo.json2py(data)
                r = duckduckgo.Result(pydat)
                d_heading = r.heading()
                d_answer = r.answer()
                d_definition = r.definition()
                d_abstract = r.abstract()
                r = None

            # results
            # insert into db
            dt = db_datetime_utc()
            c = None
            c = db.execute('INSERT INTO duckduckgo \
                            (key, date_time, heading, \
                             answer, definition, abstract) \
                             VALUES (?, ?, ?, ?, ?, ?)',
                (ddg_key, dt, d_heading, d_answer, d_definition, d_abstract))
            if not c:
                response.set_header('Access-Control-Allow-Origin', 
                                    'http://127.0.0.1:8080')
                return {'d': False}
            # get id of inserted record
            did = c.lastrowid
            c = None
 
            # return results
            response.set_header('Access-Control-Allow-Origin', 
                                'http://127.0.0.1:8080')
            return  {'d': [dict(id=did,
                            key=ddg_key,
                            date_time=dt,
                            heading=d_heading,
                            answer=d_answer,
                            definition=d_definition,
                            abstract=d_abstract)]}
#--- end routes ---



#---
# main: main app entry point
#---
def main():
    """main app entry point"""
    app.run(host='127.0.0.1', port=8081, reloader=True, debug = False)


#---
# main app entry point
#--- 
if __name__ == '__main__':
    main()


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab 
