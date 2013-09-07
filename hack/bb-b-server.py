#!/usr/bin/python
# -*- coding: utf-8 -*-


#===
# name  b-server.py
# date: 2013SEP04
# prog: pr
# desc: simple static web server using Bottle
# srcs: bb-server.py
# srcs: http://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask
#===


import ast


import bottle
from bottle import run
from bottle import abort
from bottle import debug
from bottle import route
from bottle import error
from bottle import request
from bottle import response


import socsim.tools


app = bottle.Bottle()
data = [
    dict(id=1,key='@tyabblemons',service='twitter',result=''),
    dict(id=2,key='#smem',service='twitter',result=''),
    dict(id=3,key='#melbourne',service='twitter',result=''),
    dict(id=4,key='Neil Young',service='ddg',result='')
]


#--- tools ---
#
#---
# search: for a list of values, find key == field
#         index of value in values.
#---
def search(key, field, values):
    for value in values:
        if value[field] == key:
            return value
    return False
#---
# search_by_id: return dict by id from list
#---
def search_by_id(key, value):
    return search(key, 'id', value)
#---
# replace: old values by key with new data
#---
def replace(old_data, new_field):
    """replace old data with new data"""
    """ itterate thru parameters
        if parameter: replace
        else: leave
        return
    """
    if old_data:
        for d in old_data:
            if d in new_field:
                old_data[d] = new_field[d] # sus: check if re-writing all
        return old_data
    return False
# --- tools ---


#--- routes ---
#
#

#---
# search: 
# test: curl -i http://localhost:8081/bb/api/v0.1/search
#---
@app.route('/bb/api/v0.1/search', method = 'GET')
def get_search():
    return {'search': socsim.tools.py2json(data)}
@app.route('/bb/api/v0.1/search/<sid:int>', method='GET')
def get_search_by_id(sid):
    query = search(sid, 'id', data)
    if not query:
       abort(404)
    return {'search': socsim.tools.py2json(query)}


#---
# new search: 
# test: 
# curl -i -H "Content-Type: application/json" -X POST -d '{"key":"@tyabblemson",
#                                                          "service":"twitter"}' 
#                                         http://localhost:8081/bb/api/v0.1/seach
#---
@app.route('/bb/api/v0.1/search', method = 'POST')
def new_search():
    parms = {}
    for item in bottle.request.params:
        parms = ast.literal_eval(item) # security hole
    if request:
        query = dict(id=(data[-1]['id'] + 1),
                     key= parms['key'],
                     result='',
                     service= parms['service'])
        data.append(query)
        return {'search': socsim.tools.py2json(query)}
    else:
        abort(400)


#---
# update, put
# bugs: TODO one off error? not sure now, write tests
# test:
#  curl -i -H "Content-Type: application/json" -X PUT -d '{"result":"is a great place"}
#                                       http://localhost:8081/bb/api/v0.1/search/2
#---
@app.route('/bb/api/v0.1/search/<sid:int>', method = 'POST')
def update_search(sid):
    query = search(sid, 'id', data) # find data fragment by id
    if query: # really basic validity
        # extract all the params PUT
        parms = {}
        for item in bottle.request.params:
            parms = ast.literal_eval(item) # security hole
        
        # replace value of original with those PUT
        q = search_by_id(sid, data)
        result = replace(q, parms)

        return {'search': result}
    else:
        abort(400)


#---
# delete_search
# test: curl -i -H "Content-Type: application/json" -X DELETE http://localhost:8081/bb/api/v0.1/search/1
#---
@app.route('/bb/api/v0.1/search/<sid:int>', method = 'DELETE')
def delete_search(sid):
    query = search(sid, 'id', data)
    if query:
        data.remove(query)
        return {'search': True}
    return abort(400)
#--- END ---


#--- 
# error: override doesn't work WHY?
#---
@error(404)
def error404(error):
    response.content_type='application/json; charset=UTF-8'
    return {'error': error.output}


#---
# main: main bottle entry point
#---
def main():
    bottle.debug(True)
    bottle.run(app=app, host='localhost', port=8081, reloader=True, debug=True)


# main entry point
if __name__ == "__main__":
    """main application entry point"""
    main()


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab 
