#!/usr/bin/env python
# ~*~ encoding: utf-8 ~*~


#===
# name  bigbox.tools.config.py
# date: 2013SEP29
# prog: pr
# desc: server config tools for bigbox
# lisc: moving towards GPL3
#
# copy: copyright (C) 2013 Peter Renshaw
#===


#--- server.config ---
SERVER_DIR = 'db'
SERVER_FILE = 'server_a.ini'
#--- end server.config ---


import bottle
from bottle.ext import sqlite


def db_plugin(application, db_path):
    """load database plugin given app & path"""
    plugin = sqlite.Plugin(dbfile=db_path)
    application.install(plugin)
    return application

def load(application, config_filepath):
    """load application configuration given app & path"""
    application.config.load_config(config_filepath)
    return application


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab
