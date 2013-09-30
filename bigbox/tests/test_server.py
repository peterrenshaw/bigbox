#!/usr/bin/env python
# ~*~ encoding: utf-8 ~*~


#---
# copy: copyright (C) 2013 Peter Renshaw
#---


import os.path
import unittest
import configparser


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
        self.assertTrue(self.server.config['sqlite.db'])
    def test_server_all_config_ok(self):
        """check each config entry has something at least"""
        for key in self.server.config.keys():
            #print("%s=%s" % (key,self.server.config[key]))
            self.assertTrue(self.server.config[key])
    def test_server_sqlite_plugin_ok(self):
        """look for sqlite in plugins"""
        for p in self.server.plugins:
            if p.name == 'sqlite':
                return True
        return False

#---
# suite: allows all tests run here to be run externally at 'test_all.py'
#---
def suite():
    """tests added to run in 'test_all.py'"""
    tests = ['test_server_fpc_ok',
             'test_server_configure_db_ok',
             'test_server_all_config_ok',
             'test_server_sqlite_plugin_ok']

    return unittest.TestSuite(map(TestServer, tests))


if __name__ == "__main__":
    suite()
    unittest.main()


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab

