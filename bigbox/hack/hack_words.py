#!/usr/bin/env python
# ~*~ encoding: utf-8 ~*~


#===
# name: hack_words.py
# date: 2013OCT02
# prog: pr
# desc: quick hack to clean a text file
# use : hack_words -f <source> -d <dest>
#===


import os
import sys
import os.path
from optparse import OptionParser


#===
# process: strip data, remove unwanted chars
#===
def process(str1):
    if str1:
        before = str1
        chars = ["'","\t","!",",",'"',"?","...",".",":","-"]
        str1.strip(" ")
        for c in chars:
            str1 = str1.replace(c, "")
        return str1
    else:
        return False


#---
# main: main app entry point
#---
def main():
    usage = "usage: %prog [v] -t -d"
    parser = OptionParser(usage)

    # --- options --- 
    parser.add_option("-f", "--file", dest="filepath",
                      help="supply filepath and filename to read file")
    parser.add_option("-d", "--destination", dest="destination",
                      help="supply filepath and filename to save to file")
    parser.add_option("-v", "--version", dest="version",
                      action="store_true",
                      help="current version")    
    options, args = parser.parse_args()

    #--- process ---
    if options.version:
        print("%s v%s %s %s" % ('words', '0.1', '2013OCT02', '(C) 2013'))
        sys.exit(0)
    elif options.filepath:
        if os.path.isfile(options.filepath):
            data = []
            lines = ""
            # do the business...
            # read from cache
            print("reading <%s>" % options.filepath)
            with open(options.filepath, 'r') as f:
                lines = f.read()
            
            print("process")
            # data, split by line, then clean... 
            data = lines.split("\n")
            lines = []
            words = []
            for line in data:
                # look for sentances, 
                # break by spaces
                if line:
                    lines = line.split(" ")
                    for line in lines:
                        if line:
                            line = process(line)
                            if line: 
                                words.append(line)
            # sort
            print("sort")
            words.sort()

            # save
            with open(options.destination, 'w') as f:
                for word in words:
                    f.write(word)
                    f.write(" ")
  
            print("save <%s>" % options.destination)
            sys.exit(0)
        else:
            print("error: no caching... cant open file <%s>" % options.filepath)
            sys.exit(1)
    else:
        parser.print_help()


#---
# main app entry point
#--- 
if __name__ == '__main__':
    main()


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab
