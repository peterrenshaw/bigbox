#!/usr/bin/env python
# ~*~ encoding: utf-8 ~*~


#---
# copy: copyright (C) 2013 Peter Renshaw
#---


import unittest


import bigbox.server_a


class TestServerA(unittest.TestCase):
    def setUp(self):
        pass
    def tearDown(self):
        pass


    def test_server_config_ok(self):
        pass

#---
# suite: allows all tests run here to be run externally at 'test_all.py'
#---
def suite():
    """tests added to run in 'test_all.py'"""
    tests = ['test_server_config_ok']

    return unittest.TestSuite(map(TestServerA, tests))


if __name__ == "__main__":
    suite()
    unittest.main()


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab
