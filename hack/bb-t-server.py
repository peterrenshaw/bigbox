#!/usr/bin/python
# -*- coding: utf-8 -*-


#===
# name  serve-static.py
# date: 2013AUG18
# prog: pr
# desc: simple static web server using tornado
#       not sure if this will in final code but
#       for the moment this will do. At a future
#       time I'll be re-writing this code.
#
# copy: copyright (C) 2013 Nykakin
#       <http://stackoverflow.com/questions/17284286/disable-template-processing-in-tornadoweb>
#  
#       This code is a nice little hack by Nykakin allowing tornado
#       to serve AngularJS and use the Angular templating
#       instead of the tornado templating which has the 
#       same/similar templating notation,
#
# note: 'nice hack Nykakin, is this the standard way AngularJS should be used 
#       with tornado to get around the template notation. Q (I ask myself) 
#       Is there a way to turn templating off in tornado?' cf url.
#===



import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web

import logging

from tornado.options import define, options
define("port", default=8080, help="run on the given port", type=int)

import os 
angular_app_path=os.path.join(os.path.dirname(__file__), "app-1")

class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        with open(angular_app_path + "/index.html", 'r') as file:
            self.write(file.read())     

class StaticHandler(tornado.web.RequestHandler):
    def get(self): 
        self.set_header('Content-Type', '') # I have to set this header
        with open(angular_app_path + self.request.uri, 'r') as file:
            self.write(file.read())

if __name__ == "__main__":
    tornado.options.parse_command_line()
    app = tornado.web.Application(
    handlers=[(r'/', IndexHandler), (r'/js.*', StaticHandler), (r'/cs.*', StaticHandler), (r'/img.*', StaticHandler)])
    http_server = tornado.httpserver.HTTPServer(app)
    http_server.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()

# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab 
