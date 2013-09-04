#!/usr/bin/python
# -*- coding: utf-8 -*-


#===
# name  bb-server.py
# date: 2013SEP03
# prog: pr
# desc: simple static web server using Flask
# srcs: http://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask# 
#===


from flask import Flask
from flask import abort
from flask import request
from flask import jsonify
from flask import url_for
from flask import make_response


app = Flask(__name__)


search = [
    dict(id=1,key='@tyabblemons',service='twitter',result=''),
    dict(id=2,key='#smem',service='twitter',result=''),
    dict(id=3,key='#melbourne',service='twitter',result=''),
    dict(id=4,key='Neil Young',service='ddg',result='')
]

#--- tools ---
def make_public_search(query):
    """return url instead of id"""
    new_query = {}
    for field in query:
        if field == 'id':
            new_query['uri'] = url_for('get_search', 
                                       search_id = query['id'],
                                       _external = True)
        else:
            new_query[field] = query[field]
    return new_query


#--- routes ---
@app.route('/bb/api/v0.1/search', methods = ['GET'])
def get_search():
    #return jsonify({'search': search})
    return jsonify({'search': map(make_public_search, search)})
@app.route('/bb/api/v0.1/search/<int:search_id>', methods = ['GET'])
def get_search_by_id(search_id):
    query = filter(lambda s: s['id'] == search_id, search)
    if len(query) == 0:
        abort(404)
    return jsonify({'search': query[0]})



@app.route('/bb/api/v0.1/search', methods = ['POST'])
def new_search():
    if not request.json or not 'service' or not 'result' in request.json:
        abort(400)
    query = dict(id=(search[-1]['id'] + 1),
                  key=request.json['key'],
                  result="",
                  service=request.json['service'])
    search.append(query)
    return jsonify({'search':search}), 201    # HTTP created
@app.route('/bb/api/v0.1/search/<int:search_id>', methods = ['PUT'])
def update_search(search_id):
    query = filter(lambda s: s['id'] == search_id, search)
    if len(query) == 0:
        abort(400)
    if not request.json:
        abort(400)
    if 'key' in request.json and type(request.json['key']) != unicode:
        abort(400)
    if 'service' in request.json and type(request.json['service']) != unicode:
        abort(400)
    if 'result' in request.json and type(request.json['result']) != unicode:
        abort(400)
    query[0]['key'] = request.json.get('key', query[0]['key'])
    query[0]['service'] = request.json.get('service', query[0]['service'])
    query[0]['result'] = request.json.get('result', query[0]['result'])
    return jsonify({'search': search[0]})
@app.route('/bb/api/v0.1/search/<int:search_id>', methods = ['DELETE'])
def delete_search(search_id):
    query = filter(lambda s: s['id'] == search_id, search)
    if len(query) == 0:
        abort(400)
    search.remove(query[0])
    return jsonify({'result': True})


#--- error handling ---
# handle errors in json
@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error':'Not found'}), 404)


if __name__ == '__main__':
    app.run(debug = True)


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab 
