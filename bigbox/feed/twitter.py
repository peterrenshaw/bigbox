#!/usr/bin/env python
# ~*~ encoding: utf-8 ~*~


#===
# name: twitter.py
# date: 2013SEP22
# prog: pr
# desc: code allows twitter integration with bigbox
#       Twython code allows full access to twit api
#       ...along with restrictions.
# lisc: moving towards GPL3
# copy: copyright (C) 2013 Peter Renshaw
#
# use : 
#       send: twitter.py -m 'a message to send'
#       help: twitter.py -h
#       vers: twitter.py -v 
# sorc: <https://github.com/ryanmcgrath/twython>
#===


import sys
import os.path
from optparse import OptionParser


from twython import Twython
from twython import TwythonError


import bigbox.tools
import bigbox.feed.config


# TODO 
#     * check twitter restrictions
#       on search
#     * implement a twitter search count/min
#     * create extraction object for better extraction
#     * internet connected
#     * not get secrets data into github
#     * testing
#     * work out how to:
#     - report errors, halt/return code?
#     - save to filesystem/api?


#---
# authenticate_r: pass in keys, object & return authenticated
#                 for READ ONLY access only to twitter API
#                 Twython object or F
#---
def authenticate_r(consumer_key, consumer_secret, access_token=""):
    """
    authenticate Twython object with keys & secrets, return 
    obj or F
    """
    status = False
    try:
        # important: this only authenticates for READ ONLY api calls
        status = Twython(consumer_key, consumer_secret, oauth_version=2)

        # have access token?
        # extract then save this for later on
        q_access_token = access_token
        if not access_token:
            q_access_token = status.obtain_access_token()
            #print('access_token = %s' % q_access_token)
        
        status = Twython(consumer_key, access_token=q_access_token)
    except TwythonError as e:
        status = False    
    return status
#---
# authenticate_rw: pass in keys, object & return authenticated
#                  for full API access to twitter Twython object or F
#---
def authenticate_rw(consumer_key, consumer_secret, 
                    access_key, access_secret):
    """
    authenticate Twython object with keys & secrets, return obj or F
    """
    status = False
    try:
        status = Twython(consumer_key, consumer_secret, 
                         access_key, access_secret)
    except TwythonError as e:
        status = False
    return status


#---
# name: Twy_r
# date: 2013SEP24
# prog: pr
# desc: simple wrapper for Twython object
#       READ ONLY to twitter API
#       have to pass in valid Twython obj
#       so remember to initialise
#---
class Twy_r:
    def __init__(self, twitter_obj):
        """init Twy obj"""
        self.twitter = twitter_obj
        self.query = ""
        self.result = ""
        self.result_type = ""
        self.count = 0
        self.until = ""
        self.include_entities = False
    def count(self, count):
        """set count for query returns"""
        if count > 0:
            self.count = count
            return True
        return False
    def search(self, query, 
                     result_type="recent", 
                     count=0, 
                     until="",
                     include_entities=False):
        """query twitter api"""
        if query:
            self.query = query
            self.result_type = result_type
            self.count = count
            self.until = until
            self.include_entities = include_entities
            self.result = self.twitter.search(q = self.query,
                                    result_type = self.result_type,
                                    count = self.count, 
                                    until = self.until,
                                    include_entities=self.include_entities)
            return self.result
        return False       
    def build_data(self, query, data, datetime):
        """build data into a dictionary to save to file"""
        if data:
            dt = datetime

            q = query.replace(' ','+')
            md_count = data['search_metadata']['count']

            messages = []
            for s in data['statuses']:
                d = dict(id_str=s['id_str'],
                         text=s['text'])
                messages.append(d)
                d = None
           
            #---
            # data structure for storage
            py_data = dict(q=q,                # query made
                           count=md_count,     # message count
                           datetime=dt,        # date time stamp  
                           message=messages)   # id, text from queries
            #---
            return py_data
        return False
    def save(self, data):
        """save a query"""
        # save to file system/rest api? where?
        # save to filesystem
        # TODO what day is this? localtime?
        if data:
            self.result = data
            fn = bigbox.tools.fn_current_day(ext='json')
            fp = os.path.join(os.getcwd(), "query")
            if os.path.isdir(fp):
                fpn = os.path.join(fp, fn)            
                with open(fpn, 'a') as f:
                    dt = "%s" % bigbox.tools.db_datetime_utc()
                    line_py = self.build_data(self.query, self.result, dt)
                    line_json = bigbox.tools.py2json(line_py)
                    f.write(line_json)
                    f.write('\n')  # stops braces butting up
                return True       
        return False


#---
# name: Twy_rw
# date: 2013SEP22
# prog: pr
# desc: simple wrapper for Twython object
#       RW access to twitter API
#       have to pass in valid Twython obj
#       so remember to initialise
#---
class Twy_rw:
    def __init__(self, twitter_obj):
        """init Twy object"""
        self.max_msg_length = 140
        self.twitter = twitter_obj
        self.message = ""
        self.message_id = 0
        #
        # TODO check Twython obj valid
        #
    def valid(self):
        """is object valid?"""
        # TODO this really doesn't do the job
        #      seems to return obj even without
        #      consumer & access keys
        if self.twitter: return True
        else: return False
    def message_len(self):
        """return length of message"""
        return len(self.message) if self.message else 0  # exect F, use zero
    def valid_message_length(self):
        """check message length is correct"""
        if self.message_len() > 0:
            if self.message_len() <= self.max_msg_length:
                return True
        return False
    #---
    # build_data: extract data from twitter api call, decode & build
    #             dictionary to save. Failed? try url below:
    # <https://dev.twitter.com/docs/api/1.1/get/statuses/show/%3Aid>
    #
    # original data structure:
    #    line = """{"message": "%s","status": "%s","date": %s}\n""" % 
    #              (message, update.id, time.mktime(t.timetuple())) 
    #
    #---
    def build_data(self, tid, tmsg, tent):
        """build dict of data to save to file"""
        if tid:  # have twitter id?
            if tmsg: # have a twitter message?
                if tent: # have a twitter entitiy? (complicated)

                    # gracefully fail if we screw up
                    try:
                        dtags = tent['hashtags']
                        durls = tent['urls']

                        # will this survive json if not str?
                        dt_str = "%s" % bigbox.tools.db_datetime_utc()

                        #---
                        # data structure for storage
                        py_data = dict(id_str=tid,              # tweet id
                                       message=tmsg,            # msg sent
                                       hashtag=tent['hashtags'],# list of #tags 
                                       urls=tent['urls'],       # list of urls
                                       date_str=dt_str)         # epoch in utc
                        #---
                    except:
                        return False
                    return py_data
        return False
    def save(self, tid, tmsg, tent):
        """save message to somewhere"""
        # save to file system/rest api? where?
        # save to filesystem
        # TODO what day is this? localtime?
        fn = bigbox.tools.fn_current_day(ext='json')
        fp = os.path.join(os.getcwd(), "tweet")
        if os.path.isdir(fp):
            fpn = os.path.join(fp, fn)            
            with open(fpn, 'a') as f:
                line_py = self.build_data(tid, tmsg, tent)
                line_json = bigbox.tools.py2json(line_py)
                f.write(line_json)
                f.write('\n')  # stops braces butting up
            return True       

        return False
    def send(self, message):
        """send a message"""
        self.message = message
        status = False
        # only send if valid length
        if self.valid_message_length():
            # catch Twython errors
            try:
                # twitter api call, (trim_user) only ret what we need
                s = self.twitter.update_status(status=self.message, trim_user=True)

                t_id = s['id_str']    # twitter id as string
                t_msg = s['text']     # twitter message
                t_ent = s['entities'] # twitter urls, tags & misc

                status = self.save(t_id, t_msg, t_ent)
            except TwythonError as e:
                return False
        return status
    def close(self):
        """de-allocate Twython object"""
        self.twitter = None
        return True


#---
# main cli entry point
#---
def main():
    """main cli entry point"""
    usage = "usage: %prog [v] -t -d"
    parser = OptionParser(usage)

    # --- options ---
    parser.add_option("-m", "--message", dest="message", \
                      help="send a message")
    parser.add_option("-q", "--search", dest="search", \
                      help="search twitter by query")
    parser.add_option("-v", "--version", dest="version",
                      action="store_true",
                      help="current version")    
    options, args = parser.parse_args()

    # --- process ---
    if options.version:
        print("%s v%s %s %s" % ('bigbox', bigbox.__version__, 
                                '2013SEP22', '(C) 2013'))
        sys.exit(0)
    elif options.message:
        twitter = authenticate_rw(bigbox.feed.config.CONSUMER_KEY,
                                  bigbox.feed.config.CONSUMER_SECRET,
                                  bigbox.feed.config.ACCESS_KEY,
                                  bigbox.feed.config.ACCESS_SECRET)
        if twitter:
            t = Twy_rw(twitter)
            print("send")
            status = t.send(options.message)
            if status:
                print("message saved & sent (%s)" % t.message_len())
                print("ack")
            else:
                print("cant send message (%s)" % t.message_len())
                print("fail")
        else:
            print("bad Twython object, check")

        t.close()
    elif options.search:
        print("query = <%s>" % options.search)
        twitter = authenticate_r(bigbox.feed.config.CONSUMER_KEY,
                                 bigbox.feed.config.CONSUMER_SECRET,"")
        if twitter:
            t = Twy_r(twitter)
            if t: 
                result = t.search(options.search)
                t.save(result)
                print("ack")      
            else:
                print("fail")
        else:
            print("bad Twython object, check")
    else:
        parser.print_help()
    # --- end process ---


# main cli entry point
if __name__ == "__main__":
    main()


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab
