#!/usr/bin/python
# -*- coding: utf-8 -*-


from app import app

@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab 
