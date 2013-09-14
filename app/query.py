#!/usr/bin/env python
# ~*~ encoding: utf-8 ~*~


#===
# name  query.py
# date: 2013AUG30
# prog: pr
# desc: query the ddg instant answer API
#       this is a throw away bit of code to test/demonstate and use the 
#       modules I'm working on.
#
# lisc: moving towards GPL3
# use:  python query.py
#                        -h, --help            show this help message and exit
#                        -q  --query           search query
#                        --- TODO urgent do this now --- 
#                        -d  --default         assume json, set default opts
#                                                safesearch=T
#                                                pretty=T
#                                                callback=F
#                                                noredirect=T
#                                                callback=F
#                        --- TODO urgent do this now --- 
#
#                        Options
#                        -j, --json            return json?
#                        -s, --safesearch      only return safe queries
#                        -p, --pretty          if returned json can prettify json
#                        -c, --callback        if returned json, can callback
#                        -d, --skipdisambig    skip the disambiguation of a query?
#                        -r, --noredirect      do not redirect
#
#                        Admin
#                        -k  --cache           query & save to cachec/read from cache
#                        -e  --extract         extact data from file
#                        -v, --version         current version
#                        -y  --querystring     show querystring information
#
# copy: copyright (C) 2013 Peter Renshaw
#===


__version__ = "0.1.0"


import os
import sys
import json
from optparse import OptionParser


import duckduckgo

#--- tools ---
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
def convert(data, to_json=True):
    """conversion from py<==>json"""
    if data:
        if to_json:
            return json.dumps(data, sort_keys=True, indent=4, separators=(',', ': '))
        else:
            return json.loads(data)
    return False
def json2py(data):
    """convert json data to python structure"""
    return convert(data, to_json=False)
def py2json(data):
    """convert python structure to json"""
    return convert(data)
#--- tools ---

#---
# main: cli entry point
#---
def main():
    """main cli entry point"""
    usage = "usage: %prog [v] -t -d"
    parser = OptionParser(usage)

    # --- options --- 
    #
    parser.add_option("-q", "--query", dest="query", \
                      help="query duckduckgo")
    parser.add_option("-j", "--json", dest="json", \
                      action="store_true", 
                      help="return json?")
    parser.add_option("-s", "--safesearch", dest="safe_search", \
                      action="store_true",
                      help="only return safe queries")
    parser.add_option("-p", "--pretty", dest="pretty", \
                      action="store_true", 
                      help="if returned json then we can prettify json")
    parser.add_option("-n", "--no_html", dest="no_html", \
                      action="store_true",
                      help="remove any html")
    parser.add_option("-c", "--callback", dest="callback", \
                      action="store_true", 
                      help="if returned json, can callback")
    parser.add_option("-d", "--skipdisambig", dest="skip_disambig", \
                      action="store_true", 
                      help="skip the disambiguation of a query?")
    parser.add_option("-r", "--noredirect", dest="no_redirect", \
                      action="store_true", 
                      help="do not redirect")
    # --- admin --- 
    #
    parser.add_option("-k", "--cache", dest="cache", 
                      action="store_true",
                      help="read query from cache, not duckduckgo")
    parser.add_option("-e", "--extract", dest="extract",
                      action="store_true",
                      help="extract data from the query")
    parser.add_option("-f", "--file", dest="filepath",
                      help="supply filepath and filename to save to file")
    parser.add_option("-y", "--querystring", dest="querystring",
                      action="store_true",
                      help="show query string")
    parser.add_option("-v", "--version", dest="version",
                      action="store_true",
                      help="current version")    
    options, args = parser.parse_args()


    if options.version:
        print("%s v%s %s %s" % ('bigbox.tools.query', __version__, 
                                '2013AUG31', '(C) 2013'))
        sys.exit(0)
    elif options.cache:
        # caching: use local version, if present, readable, (recent)
        if options.filepath:
            if not os.path.isfile(options.filepath):
                print("error: no caching... cant open file <%s>" % options.filepath)
                sys.exit(1)
            
            # read from cache
            print("reading <%s> from cache...\n" % options.filepath)
            with file(options.filepath, 'r') as f:
                data = f.read()
            
            pydat = json2py(data)
            r = duckduckgo.Result(pydat)

            # results
            if r.heading(): print(r.heading())
            if r.answer(): print(r.answer())
            if r.definition(): print(r.definition())
            if r.abstract(): print(r.abstract())


            # display results abstract from list
            print("Results Abstract")
            ra = duckduckgo.ResultAbstract()
            for topic in r.related_topics():
                ra.new(topic)
                print("\t%s - %s" % (ra.text(), ra.first_url()))
            print("")
            ra = None

            # display related topics using ResultAbstract object
            print("Related Topics")
            ra = duckduckgo.ResultAbstract()
            r.results(ra, "$text <$first_url>")
            print("")
            r.related_topics(ra, "$text <$first_url>")

            sys.exit(1)
        else:
            print("error: no caching... supply a file and filepath <%s>" % options.filepath)
            print("query contining....")
            sys.exit(1)


    elif options.query:
        ddg = duckduckgo.Duckduckgo()

        # options
        is_json = False
        is_pretty = False
        no_html = False
        is_callback = False
        no_redirect = False
        skip_disambig = False
        safe_search = False

        # selection options
        if options.json:
            is_json = True
            if options.pretty:
                is_pretty = True
            if options.callback:
                is_callback = True
        if options.no_html:
            no_html = True
        if options.no_redirect:
            no_redirect = True
        if options.skip_disambig:
            skip_disambig = True
        if options.safe_search:
            safe_search = True

        #--- 
        # not the best way to do this, but one way. here's another:
        #    ddg = Duckduckgo("", rest,of,args,...)
        #    ddg.query('a term')
        #---

        # build parms
        ddg.build_parms(options.query, is_json,
                                       safe_search,
                                       is_callback,
                                       is_pretty,
                                       no_html,
                                       no_redirect,
                                       skip_disambig)
        # query url
        query_url = ddg.build_query_url()
        if options.querystring:
            print("Query information")
            print("Q '%s'" % options.query)
            print("S <%s>" % query_url)
            sys.exit(1)

        # display
        data = ddg.request()
        if is_json:
            # save
            if options.filepath: 
                if not socsim.tools.save(options.filepath, data):
                    print("error: can't save to <%s>" % options.filepath)
                    sys.exit(1)
                print("saved to <%s>" % options.filepath)

            # extract data
            if options.extract:
                pydat = json2py(data)
                r = duckduckgo.Result(pydat)

                # results
                if r.heading(): print(r.heading())
                if r.answer(): print(r.answer())
                if r.definition(): print(r.definition())
                if r.abstract(): print(r.abstract())

                print("Results Abstract")
                ra = duckduckgo.ResultAbstract()
                for topic in r.related_topics():
                     ra.new(topic)
                     print("\t%s - %s" % (ra.text(), ra.first_url()))
                print("")
                ra = None

                print("Related Topics")
                ra = duckduckgo.ResultAbstract()
                r.results(ra, "$text <$firsturl>")
                print("")
                r.related_topics(ra, "$text <$firsturl>")

                r = None
        else:
           print("I don't grok xml dude...")
    else:
        parser.print_help()


if __name__ == "__main__":
    main()


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab
