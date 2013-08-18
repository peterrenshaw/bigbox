#!/usr/bin/python
# -*- coding: utf-8 -*-

import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web

import logging

from tornado.options import define, options
define("port", default=8080, help="run on the given port", type=int)

import os 
angular_app_path=os.path.join(os.path.dirname(__file__), "app")

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

