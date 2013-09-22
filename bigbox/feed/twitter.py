#!/usr/bin/env python
# ~*~ encoding: utf-8 ~*~


#===
# name: twitter.py
# date: 2013SEP22
# prog: pr
# desc: code allows twitter integration with bigbox
#       Twython code allows full access to twit api
#       along with restrictions.
# use : 
#       send: twitter.py -m 'a message to send'
#       help: twitter.py -h
#       vers: twitter.py -v 
# sorc: <https://github.com/ryanmcgrath/twython>
#===


import sys
from optparse import OptionParser


from twython import Twython
from twython import TwythonError


import bigbox
import bigbox.feed.config


# TODO 
#     * internet connected
#     * not get secrets data into github
#     * testing


#---
# authenticate: pass in keys, object & return authenticated
#               twitter object or F
#---
def authenticate(consumer_key, consumer_secret, access_key, 
                 access_secret):
    """
    authenticate Twython object with keys & secrets, return 
    obj or F
    """
    status = False
    try:
        status = Twython(consumer_key, consumer_secret, access_key, 
                         access_secret)
    except TwythonError as e:
        print("error: twitter authentication failed")
        print("\t%s" % e)
    return status


#---
# name: Twy
# date: 2013SEP22
# prog: pr
# desc: simple wrapper for Twython object
#
#       have to pass in valid Twython obj
#       so remember to initialise
#---
class Twy:
    def __init__(self, twitter):
        """init Twy object"""
        self.max_msg_length = 140
        self.twitter = twitter
        self.message = ""
        #
        # TODO check Twython obj valid
        #
    def message_len(self):
        """return length of message"""
        return len(self.message)
    def valid_message_length(self):
        """check message length is correct"""
        if self.message_len() > 0:
            if self.message_len() <= self.max_msg_length:
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
                self.twitter.update_status(status=self.message)
                status = True
            except TwythonError as e:
                pass  # TODO capture error
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
        twitter = Twython(bigbox.feed.config.CONSUMER_KEY,
                          bigbox.feed.config.CONSUMER_SECRET, 
                          bigbox.feed.config.ACCESS_KEY, 
                          bigbox.feed.config.ACCESS_SECRET)
        t = Twy(twitter)
        print("send")
        status = t.send(options.message)
        print("'%s' (%s)" % (options.message, t.message_len()))
        if status:
            print("ack")
        else:
            print("fail")
        t.close()
    else:
        parser.print_help()
    # --- end process ---


# main cli entry point
if __name__ == "__main__":
    main()


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab
