#!/usr/bin/env python
# ~*~ encoding: utf-8 ~*~


#---
# copy: copyright (C) 2013 Peter Renshaw
#---


import json
import os.path
import unittest


import bigbox.tools


class TestTools(unittest.TestCase):
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
        json = bigbox.tools.py2json(self.my_py)
        self.assertTrue(json)
        self.assertEqual(json, self.my_json)
    def test_py2json_empty_arg_fail(self):
        """empty arg should return F"""
        self.assertFalse(bigbox.tools.py2json(""))
    # json2py
    def test_json2py_ok(self):
        """input json, get out python"""
        py = bigbox.tools.json2py(self.my_json)
        self.assertTrue(py)
        self.assertEqual(py, self.my_py)
    def test_json2py_empyt_arg_fail(self):
        """empty arg should return F"""
        self.assertFalse(bigbox.tools.json2py(""))
    # convert
    def test_convert_empty_arg_fail(self):
        """empty arg should fail"""
        self.assertFalse(bigbox.tools.convert(""))

    #---
    # save
    def test_save_empty_path_arg_fail(self):
        """empty arg/s for read, F"""
        self.assertFalse(bigbox.tools.save("","data"))
    def test_save_empty_data_arg_fail(self):
        """empty data arg, F"""
        fp = os.path.join("")
        self.assertFalse(bigbox.tools.save(fp, ""))
    #--- filepaths
    #--- filenames
    #--- extensions
    # read
    def test_read_empty_fpn_arg_fail(self):
        """empty filepathname, F"""
        self.assertFalse(bigbox.tools.load(""))


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
             'test_read_empty_fpn_arg_fail']

    return unittest.TestSuite(map(TestTools, tests))


if __name__ == "__main__":
    suite()
    unittest.main()


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab
