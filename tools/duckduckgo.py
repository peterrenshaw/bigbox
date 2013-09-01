#!/usr/bin/env python
# ~*~ encoding: utf-8 ~*~


#===
# name  duckduckgo.py
# date: 2013AUG30
# prog: pr
# desc: tools to query the ddg instant answer API
# lisc: moving towards GPL3
#
# copy: copyright (C) 2013 Peter Renshaw
#===


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
from string import Template
from optparse import OptionParser


import socsim.tools


__version__ = "0.1.0"
PYTHON3 = "30000f0"
PYTHON273 = "20703f0"
USER_AGENT = "bigbox-tools-ddg"


# TODO call from socsim.tools.
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
#
# todo: * default parms
#       - minimum parameters
#       [x] stop parm sort on encoding
#       [x] cli options for setting parms
#---
class Duckduckgo:
    """query duckduckgo instant answer API"""
    def __init__(self, query="", is_json=True, 
                       user_agent=USER_AGENT,
                       version=__version__):
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
        self.query_param = {}
        self.parameters = {}
        
        self.api_url = 'http://api.duckduckgo.com/?'
        self.query_url = ""
        self.user_agent = "%s-%s" % (user_agent, version)
        self.data = ""

        # build parameter
        self.build_parms(self.query, self.is_json, 
                         self.safesearch, self.callback, self.pretty, 
                         self.no_html, self.no_redirect, self.skip_disambig)
    def build_parms(self, query, is_json,
                          safesearch,  callback, pretty, no_html, 
                          no_redirect, skip_disambig, user_agent=USER_AGENT):
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

        self.query_param = dict(q=self.query) 
        if is_json:
            self.parameters = dict(o=self.ret_format,
                                   callback=self.callback,
                                   pretty=self.pretty,
                                   kp=self.safesearch,
                                   no_redirect=self.no_redirect,
                                   no_html=self.no_html,
                                   d=self.skip_disambig,
                                   t=self.user_agent)
        else:
            self.parameters = dict(o=self.ret_format,
                                   kp=self.safesearch,
                                   no_redirect=self.no_redirect,
                                   no_html=self.no_html,
                                   d=self.skip_disambig,
                                   t=self.user_agent)
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
            query_param = urlencode(self.query_param)
            url_enc_params = urlencode(self.parameters)
            self.query_url = "%s%s&%s" % (self.api_url,
                                       query_param,
                                       url_enc_params)
            return self.query_url
        else:
            return False
    def __request_pydefault(self):
        """request made using urlib (py3) or urllib2 (py2.7.3)"""
        data = ""
        request = Request(self.query_url, 
                          headers={'User-Agent': self.user_agent})
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
                         headers={'User-Agent': self.user_agent})
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


#---
# name: Result
# date: 2013SEP01
# prog: pr
# desc: query Duckduckgo zero click api
# cite: <https://api.duckduckgo.com/api>>
#       <http://help.dukgo.com/customer/portal/articles/216399>
# test: <https://mashape.com/duckduckgo/
#                duckduckgo-zero-click-info#!documentation>
#---
class Result:
    def __init__(self, pythonic_data):
        """init result object"""
        self.data = pythonic_data # data is pythonic
        self.category = {'A':'article',  'D':'disambiguation',
                         'C':'category', 'N':'name', 
                         'E':'exclusive','':'nothing'}
    # --- general query ---
    def search(self, key):
        """generalised query by key on list data, find or F"""
        if key:
            for title in self.data:
                if key == title:
                    return self.data[title]
        return False

    # --- specific query ---
    #
    # abstract
    def abstract(self):
        """return abstract or F"""
        return self.search('Abstract')
    def abstract_text(self):
        """return abstract text or F"""
        return self.search("AbstractText")
    def abstract_source(self):
        """return abstract source or F"""
        return self.search('AbstractSource')
    def abstract_url(self):
        """return abstract url or F"""
        return self.search('AbstractURL')
    # image
    def image(self):
        """return image info or F"""
        return self.search('Image')
    # --- 
    def heading(self):
        """return heading or F"""
        return self.search('Heading')
    # answer 
    def answer(self):
        """return answer or F"""
        return self.search('Answer')
    def answer_type(self):
        """return answer type or F"""
        return self.search('AnswerType')
    # definition
    def definition(self):
        """return definition"""
        return self.search('Definition')
    def definition_source(self):
        """return definition source or F"""
        return self.search('DefinitionSource')
    def definition_url(self):
        """return definition url or F"""
        return self.search('DefinitionURL')
    def display(self, rao, results, template):
        """
        funky default template,data driven display routine
        for related_topics and results;

        uses string.Template so it's inbuilt and uses the 
        idea of keys from the dictionary to relace the $key
        notation in the template. It's not foolproof but it
        works for simple data output. You can just ignore it
        and write a fancy one with the data returned form 
        both related_topics and results.
        """
        if template: tpl = template
        else: 
            tpl = """<img height='$iconheight' width='$iconwidth' src='$iconurl'> $result $text <$firsturl>"""
        if rao:  # TODO test explicit ResultAbstract injected
            stubs = []
            for topic in results:
                rao.new(topic)
                data = dict(result=rao.result(),
                            firsturl=rao.first_url(),
                            iconurl=rao.icon()['url'],
                            iconheight=rao.icon()['height'],
                            iconwidth=rao.icon()['width'],
                            text=rao.text())
                stub = Template(tpl).substitute(data)
                stubs.append(stub)
            for stub in stubs:
                print stub
        return False
    # related topics (many)
    def related_topics(self, rao="", template=""):
        """return related topic as list or F"""
        topics = self.search('RelatedTopics')
        if rao: return self.display(rao, topics, template)
        return self.search('RelatedTopics')
    # results
    def results(self, rao="", template=""):
        """return list of results or F"""
        results = self.search('Results')
        if rao: return self.display(rao, results, template)
        return results
    # --- 
    def response_type(self):
        """return response category"""
        rtype = self.search('Type')
        if rtype in self.category:
            return self.category[rtype]
        else: 
            return False
    def redirect(self):
        """return redirect ? or F"""
        return self.search('Redirect')


#---
# name: ResultAbstract
# date: 2013SEP01
# prog: pr
# desc: process the 'RelatedTopics' or 
#       'Results' stubs spat out from
#       Results.related_topics and 
#       Results.results
#
#       possible to use injection (pass obj
#       into Results. Also possible to just
#       pass the data to the object and process
#
#       import duckduckgo
#       import socisim.tools
#
#       pydat = socsim.tools.json2py(data)
#       r = duckduckgo.Result(pydat)
#       pydat = r.results()
#       ra = ResultAbstract(pydat)
#       for item in ra:
#           if item:
#               print("%s - %s" % (ra.first_url_text(),ra.first_url())
#     
#       OR
# 
#       # use ResultAbstract object
#       ra = duckduckgo.ResultAbstract()
#
#       # returns raw list of data
#       print("Results")
#       r.results(ra) 
#
#       # returns list of data, processed with a simple template
#       r.related_topics(ra, "$result $text <$firsturl>")
#
#---
class ResultAbstract:
    def __init__(self, data=""):
        """init Relatedtopics object"""
        self.data = data
    def new(self, data):
        """clear and start new search"""
        self.data = data
    # --- general query ---
    def search(self, key):
        """generalised query by key on list data, find or F"""
        if key:
            for title in self.data:
                if key == title:
                    return self.data[title]
        return False
    # --- specific query
    def result(self):
        """return result url link or F"""
        return self.search('Result')
    def first_url(self):
        """return first url in result or F"""
        return self.search('FirstURL')
    def icon(self):
        """return icon details or F"""
        icon = self.search('Icon')
        if icon:
            iurl =    icon['URL'] if ('URL' in icon) else False
            iheight = icon['Height'] if ('Height' in icon) else False
            iwidth =  icon['Width'] if ('Width' in icon) else False
            return dict(url=iurl, height=iheight, width=iwidth)
        else: 
            return False
    def text(self):
        """return text or F"""
        return self.search('Text')


# main: cli entry point
def main():
    """main cli entry point"""
    pass

if __name__ == "__main__":
    main()


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab
