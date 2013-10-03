#!/usr/bin/env python
# ~*~ encoding: utf-8 ~*~

import os
from setuptools import setup
from setuptools import find_packages


from bigbox import __version__


def read(fname):
    return open(os.path.join(os.path.dirname(__file__), fname)).read()


setup(name = "bigbox",
      version = __version__,
      description = '',
      long_description=read('README'),
      license = 'GNU GPL 3.0',
      author = "Peter Renshaw",
      author_email = "goonmail@netspace.net.au",
      url = 'https://github.com/peterrenshaw/bigbox',
      packages = find_packages(),
      keywords = ['realtime','search','data','local','internet'],
      zip_safe = True)

# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab
