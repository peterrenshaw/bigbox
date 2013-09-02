#!/usr/bin/env python
# ~*~ encoding: utf-8 ~*~


import sys
import os.path
from string import Template
from optparse import OptionParser


import socsim.tools
from socsim.factory import Ini


def search(key, data):
    if data:
        for d in data:
            if key in d['key']:
                 return d['value']
    return False
#---
# main: cli entry point
#---
def main():
    """main cli entry point"""
    usage = "usage: %prog [-h] -s"
    parser = OptionParser(usage)
    parser.add_option("-s", "--source", dest="source",
                      help="read source '.ini' file")
    parser.add_option("-d", "--destination", dest="destination",
                      help="save destination filename path")
    parser.add_option("-v", "--version", dest="version", \
                      action="store_true",
                      help="current version")
    options, args = parser.parse_args()


    if options.version:
        print("%s %s %s %s" % ("hack_indexgen",
                               "0.0.1",
                               "2013",
                               "(C) Copyright Peter Renshaw"))
        sys.exit(0)
    if options.source:
        print("source <%s>" % options.source)

        # lets rock
        pyversion = socsim.tools.hex_version()
        config = socsim.tools.hack_import_configparser(pyversion)
        ini = socsim.factory.Ini(pyversion)
        if not ini.read(config, options.source):
            print("error: factory.Ini has a problem")
            print("\toptions.source=<%s>" % (options.source))
            print("\tconfig=<%s>" % config)
  
        # extract Ini data
        ini_data = ini.all()
        if not ini_data:
            print("error: can't xtract factory.Ini <%s>" %
                   options.source)
            sys.exit(1)

        # get to work
        rendered = []
        for data in ini_data:
            title = search('title', data)
            description = search('description', data)
            date = search('date', data)
            filename = search('filename', data)
            #ext = search('ext', data)
    
            tpl = """### [$title]($filename)\n**$date**\n*$description*\n\n"""
            data = dict(title=title,
                        description=description,
                        date=date,
                        filename=filename)
            render = Template(tpl).substitute(data)
            rendered.append(render)

        if options.destination:
            print("destination <%s>" % options.destination)
            
            # render out
            fd = ""
            for r in rendered:
                fd = "%s%s" % (fd, r)

            status = socsim.tools.save(options.destination, fd)
            if status: 
                print("saved <%s>" % options.destination)
            else:
                print("error: can't save to <%s>" % options.destination)
        
        sys.exit(1)

if __name__ == "__main__":
    main()


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab 
