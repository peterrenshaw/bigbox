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
from bottle.ext import sqlite


import bigbox.tools.file
from bigbox.tools.config import SERVER_DIR
from bigbox.tools.config import SERVER_FILE


# configure: configure server
def configure(fp_config):
    """configure server. load configuration and plugins"""
    app = bottle.Bottle()

    # load configurations from file
    # TODO test sane app.config settings
    #      return app or F
    app.config.load_config(fp_config)
    dbf = app.config['sqlite.db']

    # load sqlite plugin via config sqlite details
    # TODO test app plugin works, return app or F
    plugin = sqlite.Plugin(dbfile=dbf)
    app.install(plugin)

    return app
# run: configure then run server or exit(1)
def run(filepath_conf):
    """run the server or exit(1)"""
    if filepath_conf: 
        bba = configure(fp_conf)
        bba.run(host = bba.config['app.host'],
                port = bba.config['app.port'],
                reloader = bba.config['app.reloader'],
                debug = bba.config['sqlite.db'])
    else:
        return False


# main: cli entry point
def main():
    """main cli entry point"""
    fp_conf = bigbox.tools.file.path_absolute(SERVER_DIR, 
                                              SERVER_FILE)
    run(fp_conf)


if __name__ == "__main__":
    main()


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab
