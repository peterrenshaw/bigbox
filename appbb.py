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
from bottle.ext import sqlite


# --- test TODO test for failure ---
app = Bottle(__name__)
plugin = sqlite.Plugin(dbfile='app/database/bigbox.db')  
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
    row = db.execute('SELECT entry.* FROM entry ORDER BY entry.date_time ASC')
    items = row.fetchall()
    data = []
    for item in items:
        keys = item.keys()
        d = {}
        for key in keys:
            d[key] = item[key]
        data.append(d)
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
    row = db.execute('SELECT entry.* \
                      from entry WHERE entry.id = ?', (entry_id,))
    entry = row.fetchone()
    if len(entry) > 0:
        return  {'id': entry[0],'line':entry[1], 'date_time':entry[2]}
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
#
#--- end routes ---



#---
# main: main app entry point
#---
def main():
    """main app entry point"""
    app.run(host='127.0.0.1', port=8081, reloader=True, debug = True)


#---
# main app entry point
#--- 
if __name__ == '__main__':
    main()


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab 
