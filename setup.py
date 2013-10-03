#!/usr/bin/env python
# ~*~ encoding: utf-8 ~*~

"""
    This file is part of BigBox.

    SOCSIM is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    SOCSIM is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with SOCSIM.  If not, see <http://www.gnu.org/licenses/>.
"""

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
