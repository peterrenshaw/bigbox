#!/usr/bin/env python
# ~*~ encoding: utf-8 ~*~


import duckduckgo
import socsim.tools


filepathname = "/media/S/code/bigbox/tools/ddg.json"


def main():
    """main cli entry point"""
    # read
    with open(filepathname) as f:
        data = f.read()

    # convert, extract
    pydat = socsim.tools.json2py(data)
    r = duckduckgo.Result(pydat)

    # results
    print(r.response_type())
    print(r.definition())
    print(r.definition_source())
    print(r.heading())
    print(r.abstract_source())
    print(r.image())
    print(r.abstract_text())
    print(r.abstract())
    print(r.answer_type())
    print(r.redirect())
    print(r.definition_url())
    print(r.answer())
    print(r.results())
    print(r.abstract_url())


if __name__ == "__main__":
    main()


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab
