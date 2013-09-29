#!/usr/bin/env python
# ~*~ encoding: utf-8 ~*~


#---
# copy: copyright (C) 2013 Peter Renshaw
#---


import unittest


import bigbox.server_a
from bigbox.tools.config import SERVER_DIR
from bigbox.tools.config import SERVER_FILE


class TestServer(unittest.TestCase):
    def setUp(self):
        self.fpc = bigbox.tools.file.path_absolute(SERVER_DIR, SERVER_FILE)
        self.server = bigbox.server_a.configure(self.fpc)
    def tearDown(self):
        self.fpc = None
        self.server = None


    def test_server_fpc_ok(self):
        """is server filepath to config ok?"""
        self.assertTrue(self.fpc)
    def test_server_configure_db_ok(self):
        """has configuration worked?"""
        self.assertTrue(self.server.config['sqlite.db'] == 'bigbox.db')
        
        
#---
# suite: allows all tests run here to be run externally at 'test_all.py'
#---
def suite():
    """tests added to run in 'test_all.py'"""
    tests = ['test_server_fpc_ok',
             'test_server_configure_db_ok']

    return unittest.TestSuite(map(TestServer, tests))


if __name__ == "__main__":
    suite()
    unittest.main()


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab

