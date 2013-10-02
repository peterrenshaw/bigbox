#!/usr/bin/env python
# ~*~ encoding: utf-8 ~*~


#---
# copy: copyright (C) 2013 Peter Renshaw
#---


import json
import os.path
import unittest


import bigbox.tools.system


class TestSystem(unittest.TestCase):
    def setUp(self):
        self.my_py = ['1','2','3']
        self.my_json = """[
    "1",
    "2",
    "3"
]"""
    def tearDown(self):
        self.my_py = None
        self.my_json = None

    # py2json
    def test_py2json_ok(self):
        """input python, get out json"""
        json = bigbox.tools.system.py2json(self.my_py)
        self.assertTrue(json)
        self.assertEqual(json, self.my_json)
    def test_py2json_empty_arg_fail(self):
        """empty arg should return F"""
        self.assertFalse(bigbox.tools.system.py2json(""))
    # json2py
    def test_json2py_ok(self):
        """input json, get out python"""
        py = bigbox.tools.system.json2py(self.my_json)
        self.assertTrue(py)
        self.assertEqual(py, self.my_py)
    def test_json2py_empyt_arg_fail(self):
        """empty arg should return F"""
        self.assertFalse(bigbox.tools.system.json2py(""))
    # convert
    def test_convert_empty_arg_fail(self):
        """empty arg should fail"""
        self.assertFalse(bigbox.tools.system.convert(""))

    #---
    # save
    def test_save_empty_path_arg_fail(self):
        """empty arg/s for read, F"""
        self.assertFalse(bigbox.tools.system.save("","data"))
    def test_save_empty_data_arg_fail(self):
        """empty data arg, F"""
        fp = os.path.join("")
        self.assertFalse(bigbox.tools.system.save(fp, ""))
    #--- filepaths
    #--- filenames
    #--- extensions
    # read
    def test_read_empty_fpn_arg_fail(self):
        """empty filepathname, F"""
        self.assertFalse(bigbox.tools.system.load(""))
    #
    # str2bool
    def test_str2bool_ok(self):
        """test default, no arg, ret F"""
        self.assertFalse(bigbox.tools.system.str2bool(""))
    def test_str2bool_fail(self):
        for values in [0,'0','F','f','false','FALSE','something',9999]:
            self.assertFalse(bigbox.tools.system.str2bool(values))
    def test_str2bool_set_false_ok(self):
        for values in ['t','True',1,10000,99,'TRUE','something']:
            self.assertTrue(bigbox.tools.system.str2bool(values,is_test_true=False))
    def test_str2bool_false_ok(self):
        """test default, no arg, ret T"""
        self.assertTrue(bigbox.tools.system.str2bool_false(""))
    def test_str2bool_true_ok(self):
        """test default, no arg, ret F"""
        self.assertFalse(bigbox.tools.system.str2bool_true(""))
    def test_str2bool_false_values_ok(self):
        """test values against false to see ok"""
        for values in ['f','F','', 0, '0','false','False','FALSE']:
            self.assertTrue(bigbox.tools.system.str2bool_false(values))
    def test_str2bool_true_values_ok(self):
        """test values against false to see ok"""
        for values in ['t','T',1,'1','True','true','TRUE']:
            self.assertTrue(bigbox.tools.system.str2bool_true(values))
    def test_str2bool_false_values_fail(self):
        for values in ['t','True',1,10000,99,'TRUE','something']:
            self.assertFalse(bigbox.tools.system.str2bool_false(values))
    def test_str2bool_true_values_fail(self):
        for values in ['f','False','FALSE',0,'0','00','FALSY','fF']:
            self.assertFalse(bigbox.tools.system.str2bool_true(values))

#---
# suite: allows all tests run here to be run externally at 'test_all.py'
#---
def suite():
    """tests added to run in 'test_all.py'"""
    tests = ['test_py2json_ok',
             'test_py2json_empty_arg_fail',
             'test_json2py_ok',
             'test_json2py_empyt_arg_fail',
             'test_convert_empty_arg_fail',
             'test_save_empty_path_arg_fail',
             'test_save_empty_data_arg_fail',
             'test_read_empty_fpn_arg_fail',
             'test_str2bool_ok',
             'test_str2bool_fail',
             'test_str2bool_set_false_ok',
             'test_str2bool_false_ok',
             'test_str2bool_set_false_ok',
             'test_str2bool_true_ok',
             'test_str2bool_false_values_ok',
             'test_str2bool_true_values_ok',
             'test_str2bool_false_values_fail']

    return unittest.TestSuite(map(TestSystem, tests))


if __name__ == "__main__":
    suite()
    unittest.main()


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab
