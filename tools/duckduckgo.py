#!/usr/bin/env python
# ~*~ encoding: utf-8 ~*~

#---
# TODO optional parameter build
#      only supply parameters that have been set
#
#      urlencode
#      this breaks under python3
#      write code thad does conditional 
#      import for both Python2X % Python3
# 
#      internet up?
#      quick code that checks if internet is up 
#      otherwise fails? (worth doing?)
#---


import sys
import json


__version__ = "0.1.0"
PYTHON3 = "30000f0"
PYTHON273 = "20703f0" 
PYVER = "%x" % sys.hexversion  # not hex, readable


#---
# HACK ALERT: Make code work in version 2.7.3 & version 3
#             Allow optional use of 'Request' module if found.
#
#             purpose of this hack is twofold
#             a) check python version & use consistant 
#                code for urlencoding as it differs from
#                python 2.7.X and python 3
#
#             Default requests:
#             b) allow consistant request to be made using 
#                default urllib2 in python 2.7.x and python 3  
#
#             Optional 'Requests'
#             c) allow use of superior Request module if 
#                installed
#
#             code determines if 'Requests' import possible, 
#             reverts to default urllib/urllib2 depeding on 
#             python version </puke>
#---
LIB_REQUEST_FOUND = False                       # <== set here for reason
if PYVER >= PYTHON3:
    try:
        import requests
        LIB_REQUEST_FOUND = True
    except ImportError:
        from urllib import request as Request   # use as Request
        from urllib.request import urlopen      # use as urlopen
    from urllib.parse import encode
elif PYVER >= PYTHON273:
    try:
        import requests
        LIB_REQUEST_FOUND = True
    except ImportError:
        from urllib2 import Request             # use as Request
        from urllib2 import urlopen             # use as urlopen
    from urllib import urlencode
else:
    print("error: python:<%s>, version needs upgrading for this code" % PYVER)
    sys.exit(1)


#---
# switch: determine if 'import request' found?
#---
if LIB_REQUEST_FOUND:
    LIB_REQUEST = True  # yes, use 'import request'
else:
    LIB_REQUEST = False # no, use standard python libs


#---
# name: Duckduckgo
# date: 2013AUG27
# prog: pr
# desc: query Duckduckgo zero click api
# cite: <https://api.duckduckgo.com/api>>
#       <http://help.dukgo.com/customer/portal/articles/216399>
# test: <https://mashape.com/duckduckgo/
#                duckduckgo-zero-click-info#!documentation>
##---
class Duckduckgo:
    """query duckduckgo instant answer API"""
    def __init__(self, query="", is_json=True, version=__version__):
        """initialise ddg object"""
        # query
        self.query = query

        # query parameters         # defaults
        self.safesearch = 1        # T
        self.is_json = 1
        if self.is_json:
            self.pretty = 1        # T
            self.callback = 0      # F
        self.ret_format = 'json'   # json
        self.no_html = 1           # T
        self.no_redirect = 1       # T
        self.skip_disambig = 1     # T

        # parameters
        self.parameters = {}       
        
        self.api_url = 'http://api.duckduckgo.com/?'
        self.query_url = ""
        self.useragent = "bigbox-tools-ddg-%s" % version
        self.data = ""

        # build parameter
        self.build_parms(self.query, self.is_json, 
                         self.safesearch, self.callback, self.pretty, 
                         self.no_html, self.no_redirect, self.skip_disambig)
    def build_parms(self, query, is_json,
                          safesearch,  callback, pretty, no_html, 
                          no_redirect, skip_disambig):
        """
        build parameters from scratch, fail if no query supplied
        """
        if query:
            self.parameters.clear()
            self.query = query
        else:
            return False
 
        self.callback = 0   # init False for a reason!
        self.pretty = 0     # init False for a reason!
        self.safesearch = 1 if safesearch else 0

        if is_json:
            self.ret_format = 'json'
            if callback: 
                self.callback = 1
            if pretty:
                self.pretty = 1
        else:
            self.ret_format = 'xml'

        self.no_html = 1 if no_html else 0
        self.no_redirect = 1 if no_redirect else 0
        self.skip_disambig = 1 if skip_disambig else 0
       
        if is_json:
            self.parameters = dict(q=self.query,
                                   o=self.ret_format,
                                   callback=self.callback,
                                   pretty=self.pretty,
                                   kp=self.safesearch,
                                   no_redirect=self.no_redirect,
                                   no_html=self.no_html,
                                   d=self.skip_disambig)
        else:
            self.parameters = dict(q=self.query,
                                   o=self.ret_format,
                                   kp=self.safesearch,
                                   no_redirect=self.no_redirect,
                                   no_html=self.no_html,
                                   d=self.skip_disambig)
        return True
    def query_parm(self, key):
        """return value set to parameter"""
        if key in self.parameters:
            return self.parameters[key]
        return False
    def build_query_url(self):
        """build final query url"""
        if self.parameters:
            # TODO: work out way to stop key order change
            url_enc_params = urlencode(self.parameters)
            self.query_url = "%s%s" % (self.api_url, url_enc_params)
            return self.query_url
        else:
            return False
    def __request_pydefault(self):
        """request made using urlib (py3) or urllib2 (py2.7.3)"""
        data = ""
        request = Request(self.query_url, 
                          headers={'User-Agent': self.useragent})
        response = urlopen(request)
        if response: 
            data = response.read()
            response.close()
        if data:
            return data
        return False
    def __request_requests(self):
        """request using superior Requests library"""
        request = requests.get(self.query_url, 
                         headers={'User-Agent': self.useragent})
        if request.text: return request.text
        else: return False
    def request(self, is_librequest=LIB_REQUEST):
        """request using python3, optional choice of lib"""
        if is_librequest:
            return self.__request_requests()
        else:
            return self.__request_pydefault()
    def query(self, key, is_librequest=LIB_REQUEST):
        """given key, query ddg and return result or F"""
        if self.query_parm(key):
            self.build_query_url()
            self.data = self.request(is_librequest)
            return self.all()
        return False
    def all(self):
        """return data or F"""
        if self.data:
            return self.data
        else:
            return False


def main():
    """main cli entry point"""
    ddg = Duckduckgo('duckduckgo')
                          #query, is_json,
                          #safesearch,  callback, pretty, no_html, 
                          #no_redirect, skip_disambig
    ddg.build_parms('melbourne', True, True, False, True, True, True, True)
    query_url = ddg.build_query_url()
    print("query <%s>" % query_url)
    print(ddg.request())

if __name__ == "__main__":
    main()


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab
