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


import bottle
from bottle.ext import sqlite


#--- configuration ---
app = bottle.default_app()
app.config.load_config('server_a.ini')


# --- database --
plugin = sqlite.Plugin(dbfile=app.config['sqlite.db'])
app.install(plugin)


# main: cli entry point
def main():
    """main cli entry point"""
    app.run(host = app.config['app.host'], 
            port = app.config['app.port'], 
            reloader = app.config['app.reloader'], 
            debug = app.config['app.debug'])


if __name__ == "__main__":
    main()


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab
