#!/usr/bin/env python
# ~*~ encoding: utf-8 ~*~

#---
# copy: copyright (C) 2013 Peter Renshaw
#---


import unittest


import test_tools
import test_twitter
import test_server_a
import test_database


#---
# suite: allows all tests run here to be run externally at 'test_all.py'
#---
def main():
    """tests added to run in 'test_all.py'"""
    # add all new test suites per test module here
    suite_tools = test_tools.suite()
    suite_twitter = test_twitter.suite()
    suite_server_a = test_server_a.suite()
    suite_database = test_database.suite()

    # add the suite to be tested here
    alltests = unittest.TestSuite((suite_tools,
                                   suite_twitter,
                                   suite_server_a,
                                   suite_database))

    # run the suite
    runner = unittest.TextTestRunner()
    runner.run(alltests)


if __name__ == "__main__":
    main()


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab
