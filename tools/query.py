#!/usr/bin/env python
# ~*~ encoding: utf-8 ~*~


#===
# name  query.py
# date: 2013AUG30
# prog: pr
# desc: query the ddg instant answer API
# lisc: moving towards GPL3
# use:  python query.py
#                        -h, --help            show this help message and exit
#                        -q  --query           search query
#                        -d  --default         assume json, set default opts
#                                                safesearch=T
#                                                pretty=T
#                                                callback=F
#                                                noredirect=T
#                                                callback=F
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
import socsim.tools


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
            print("reading <%s> from cache..." % options.filepath)
            with file(options.filepath, 'r') as f:
                data = f.read()
            
            pydat = socsim.tools.json2py(data)
            r = duckduckgo.Result(pydat)

            # results
            print(r.heading())
            print(r.answer())
            print(r.abstract())

            print("Results Abstract")
            ra = duckduckgo.ResultAbstract()
            for topic in r.related_topics():
                ra.new(topic)
                print("\t%s - %s" % (ra.text(), ra.first_url()))
            ra = None

            print("Related Topics")
            ra = duckduckgo.ResultAbstract()
            r.results(ra, "$result $text <$firsturl>")
            r.related_topics(ra, "$result $text <$firsturl>")


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
                pydat = socsim.tools.json2py(data)
                r = duckduckgo.Result(pydat)
                ra = duckduckgo.ResultAbstract()
                
                # results
                print(r.answer())

                print(r.response_type())
                print(r.definition())
                print(r.definition_source())
                print(r.heading())
                print(r.abstract_source())
                print(r.image())
                print(r.abstract_text())
                print(r.abstract())
                print(r.answer_type())
                print(r.redirect())
                print(r.definition_url())
                r.results(ra)
                print(r.abstract_url())

        else:
           print("I don't grok xml dude...")
    else:
        parser.print_help()


if __name__ == "__main__":
    main()


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab
