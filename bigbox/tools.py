#!/usr/bin/env python
# ~*~ encoding: utf-8 ~*~


#===
# name  tools.py
# date: 2013AUG30
# prog: pr
# desc: tools work with bigbox
# lisc: moving towards GPL3
#
# copy: copyright (C) 2013 Peter Renshaw
#===


import os
import json
import time
import os.path
import datetime


# TODO testing #$@%^@^!

#--- filesystem tools ---
# some testing
#
def save(filepathname, data):
    """save a file to filesystem"""
    filepath = os.path.dirname(filepathname)
    filename = os.path.basename(filepathname)
    if data:
        if filename:
            if os.path.isdir(filepath):
                with open(filepathname, 'w') as f:
                    f.write(data)
                return True
    return False
def load(filepathname):
    """load a file"""
    if filepathname: 
        if os.path.isfile(filepathname):
            data = ""
            with open(filepathname, 'r') as f:
                data = f.read()
            f.close()
            return data
    return False
#
#--- end filesystem tools ---

#--- conversion tools ---
#
#---
# convert: bi-directional conversion of data from
#          py=>json or json=>py. indent_sz arg 
#          for display, reduce to zero to save
#          space.
#---
def convert(data, to_json=True, indent_sz=4):
    """conversion from py<==>json"""
    if data:
        if to_json:
            return json.dumps(data, sort_keys=True, indent=indent_sz, separators=(',', ': '))
        else:
            return json.loads(data)
    return False
def json2py(data):
    """convert json data to python structure"""
    return convert(data, to_json=False)
#---
# py2json: convert python data structure to json
#          indent arg reduces data size
#---
def py2json(data, indent=4):
    """convert python structure to json"""
    return convert(data, to_json=True, indent_sz=indent)
#
#--- end conversion tools ---


#--- datetime tools ---
#

#---
# db_datetime_utc: return epoch in utc
#---
def db_datetime_utc():
    """store datetime in UTC epoch format"""
    t = datetime.datetime.utcnow()
    return time.mktime(t.timetuple())
def dt_datetime_strf(strf_fmt="%Y%b%d"):
    return datetime.datetime.now().strftime(strf_fmt).upper()
def fn_current_day(ext="json"):
    return "%s.%s" % (dt_datetime_strf(), ext)
#
#--- end datetime tools---


# main: cli entry point
def main():
    """main cli entry point"""
    pass

if __name__ == "__main__":
    main()


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab
