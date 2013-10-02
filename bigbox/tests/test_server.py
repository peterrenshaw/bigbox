#!/usr/bin/env python
# ~*~ encoding: utf-8 ~*~


#---
# copy: copyright (C) 2013 Peter Renshaw
#---


import bottle


import os.path
import unittest
import configparser


import bigbox.tools
import bigbox.server
from bigbox.tools.system import str2bool
from bigbox.tools.config import SERVER_DIR
from bigbox.tools.config import SERVER_FILE


#===
# name: TestServer
# date: 2013OCT01
# desc: do somke basic tests on the server
#       * filepath of config file
#       * loaded configuration file info
#       * check sqlite plugin worked
#===
class TestServer(unittest.TestCase):
    def setUp(self):
        # configuration file path
        self.fpc = bigbox.tools.system.path_absolute(SERVER_DIR, SERVER_FILE)

        # bottle server 
        self.server = bottle.Bottle()

        # load configuration file (server_a.ini) via filepath
        self.server = bigbox.tools.config.load(self.server, self.fpc)

        # load the sqlite plugin via the configuration file section, 'sqlite'
        # section using 'db' data
        self.server = bigbox.tools.config.db_plugin(self.server, 
                                                    self.server.config['sqlite.db'])

        # explicit test for T/F returns
        self.is_production = str2bool(self.server.config['app.production'])
        self.is_reloader = str2bool(self.server.config['app.reloader'])
        self.is_debug = str2bool(self.server.config['app.debug'])
    def tearDown(self):
        self.fpc = None
        self.server = None

    #--- configuration ---
    def test_server_fpc_ok(self):
        """is server filepath to config ok?"""
        self.assertTrue(os.path.isfile(self.fpc))
    def test_server_configure_db_ok(self):
        """has configuration worked?"""
        self.assertTrue(self.server.config['sqlite.db'])
    def test_server_all_config_ok(self):
        """ 
        check each config entry has something in it. basic
        test will confirm if configuration file has been
        loaded and all values have been filled in.
        """
        for key in self.server.config.keys():
            #print("%s=%s" % (key,self.server.config[key]))
            self.assertTrue(self.server.config[key])
    #--- plugin: sqlite ---
    def test_server_sqlite_plugin_ok(self):
        """look for sqlite in plugins"""
        for p in self.server.plugins:
            if p.name.lower() == 'sqlite':
                return True
        return False
    #--- run ---
    def test_server_run_host_ok(self):
        """is host address sane?"""
        # for the moment either localhost or 127.0.0.1
        host = self.server.config['app.host']
        status = ((host.lower() == 'localhost') or (host == '127.0.0.1'))
        self.assertTrue(status)
    def test_server_run_port_ok(self):
        """is server port a sane choice?"""
        # port is an integer number
        port = int(self.server.config['app.port'])
        self.assertTrue(port >= 2000)
    def test_server_run_reloader_ok(self):
        """is reloader on?"""
        # Start auto-reloading server? (default: False)
        # <http://bottlepy.org/docs/dev/api.html?highlight=reloader>
        if self.is_production:
            # reloader default F
            self.assertFalse(self.is_reloader)
        else: 
            # reloader can be either T or F
            self.assertTrue((self.is_reloader == True) or 
                            (self.is_reloader == False))
    def test_server_run_debug_ok(self):
        """is debug set to F? (No for production)"""
        if self.is_production == True:
            # DEBUG should be F only
            self.assertFalse(self.is_debug)
        else:
            # DEBUG can be either T or F
            self.assertTrue((self.is_debug == True) or (self.is_debug == False)
)


#---
# suite: allows all tests run here to be run externally at 'test_all.py'
#---
def suite():
    """tests added to run in 'test_all.py'"""
    tests = ['test_server_fpc_ok',
             'test_server_configure_db_ok',
             'test_server_all_config_ok',
             'test_server_sqlite_plugin_ok',
             'test_server_run_host_ok',
             'test_server_run_port_ok',
             'test_server_run_reloader_ok', 
             'test_server_run_debug_ok']

    return unittest.TestSuite(map(TestServer, tests))


if __name__ == "__main__":
    suite()
    unittest.main()


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab

