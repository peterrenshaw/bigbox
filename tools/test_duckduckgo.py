#!/usr/bin/env python
# ~*~ encoding: utf-8 ~*~


#---
# copy: copyright (C) 2013 Peter Renshaw
#---


import unittest


import duckduckgo



class TestDuckduckgo(unittest.TestCase):
    def setUp(self):
        self.query = "I'm searching for stuff"
        self.ddg = duckduckgo.Duckduckgo(self.query)

        self.is_json = True
        self.ret_format = 'json' if self.is_json else 'xml'
        self.pretty = 1            # T
        self.safesearch = 1        # T
        self.callback = 0          # F
        self.no_redirect = 1       # F
        self.no_html = 1           # T
        self.skip_disambig = 1     # T

        if self.is_json:
            self.parameters = {'q':self.query,
                           'o':self.ret_format,
                           'pretty':self.pretty,
                           'callback':self.callback,
                           'kp':self.safesearch,
                           'no_direct':self.no_redirect,
                           'no_html':self.no_html,
                           'd':self.skip_disambig}
        else:
            self.parameters = {'q':self.query,
                           'o':self.ret_format,
                           'kp':self.safesearch,
                           'no_direct':self.no_redirect,
                           'no_html':self.no_html,
                           'd':self.skip_disambig}

        self.meaning = 0           # F
        self.skip_disambig = self.meaning
    def tearDown(self):
        self.ddg = None

    # python versions
    def test_init_ok(self):
        """is current python version 3? return T"""
        return self.assertTrue(self.ddg)

    # parameter tests
    def test_build_parms_ok(self):
        """is building parameters ok"""
        status = self.ddg.build_parms(self.query, 
                                          self.is_json,
                                          self.safesearch,
                                          self.callback,
                                          self.pretty,
                                          self.no_html, 
                                          self.no_redirect,
                                          self.skip_disambig)
        self.assertTrue(status)
    def test_parms_args_ok(self):
        """test each argument has correct value and same as test"""
        parameters = self.ddg.build_parms(self.query, 
                                          self.is_json,
                                          self.safesearch,
                                          self.callback,
                                          self.pretty,
                                          self.no_html, 
                                          self.no_redirect,
                                          self.skip_disambig)
        key_actual = self.ddg.parameters

        # test keys in actual exists in both and values equal
        for item in key_actual:
            self.assertTrue(self.parameters[item] == self.ddg.parameters[item])
    def test_param_args_fail(self):
        """invalid data should return F"""
        status = self.ddg.build_parms("", 
                                      self.is_json,
                                      self.safesearch,
                                      self.callback,
                                      self.pretty,
                                      self.no_html, 
                                      self.no_redirect,
                                      self.skip_disambig)
        self.assertFalse(status)
    def test_param_return_format_json(self):
        """check return format is json when required"""
        self.assertEqual('json',self.ddg.ret_format)
    def test_param_q_default(self):
        """check actual 'q' parameter is set to input default"""
        q_result = self.ddg.query_parm('q')
        self.assertEqual(self.query, q_result)
    def test_param_o_default(self):
        """check actual 'o' parameter is set to json default"""
        o_result = self.ddg.query_parm('o')
        self.assertEqual('json', o_result)
    def test_param_kp_default(self):
        """check default 'kp' param default, T"""
        self.assertTrue(self.ddg.query_parm('kp'))
    def test_param_no_direct_default(self):
        """check default 'no_direct' param, F"""
        self.assertTrue(self.ddg.query_parm('no_redirect'))
    def test_param_no_html_default(self):
        """check default 'no_html' param"""
        self.assertTrue(self.ddg.query_parm('no_html'))
    def test_param_d_default(self):
        """check default 'd', no disambiguation default"""
        self.assertTrue(self.ddg.query_parm('d'))
    # set to json, then pretty & callback can be set
    


#---
# suite: allows all tests run here to be run externally at 'test_all.py'
#---
def suite():
    """tests added to run in 'test_all.py'"""
    tests = ['test_init_ok',
             'test_build_parms_ok',
             'test_parms_args_ok',
             'test_param_args_fail',
             'test_param_return_format_json',
             'test_param_q_default',
             'test_param_o_default',
             'test_param_kp_default',
             'test_param_no_direct_default',
             'test_param_d_default']

    return unittest.TestSuite(map(TestDuckduckgo, tests))


if __name__ == "__main__":
    suite()
    unittest.main()


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab
