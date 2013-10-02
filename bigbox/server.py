#!/usr/bin/env python
# ~*~ encoding: utf-8 ~*~


#===
# name  server_a.py
# date: 2013SEP28
# prog: pr
# desc: bottle api server for bigbox
# lisc: moving towards GPL3
#
# copy: copyright (C) 2013 Peter Renshaw
#===


import sys
import os.path


import bottle
from bottle import route


import bigbox.tools.server
from bigbox.tools.system import str2bool
from bigbox.tools.system import path_absolute
from bigbox.tools.config import SERVER_DIR
from bigbox.tools.config import SERVER_FILE


fp_conf = path_absolute(SERVER_DIR, SERVER_FILE)

app = bottle.Bottle()
app = bigbox.tools.config.load(app, fp_conf)
app = bigbox.tools.config.db_plugin(app, app.config['sqlite.db'])


@app.route('/')
@app.route('/status')
def up():
    return bigbox.tools.server.status()


#---
# main: main app entry point
#---
def main():
    app.run(host = app.config['app.host'],
            port = int(app.config['app.port']),               # string to int
            reloader = str2bool(app.config['app.reloader']),  # string to bool
            debug = str2bool(app.config['app.debug']))        # string to bool

#---
# main app entry point
#--- 
if __name__ == '__main__':
    main()


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab
