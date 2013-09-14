#!/usr/bin/env python
# ~*~ encoding: utf-8 ~*~


import duckduckgo


# main cli enty point
def main(q=''):
    is_json = True
    safe_search = True
    is_callback = False
    is_pretty = True
    no_html = True
    no_redirect = True
    skip_disambig = True

    # selection options
    if is_json:
        if is_pretty:
            is_pretty = True
        else: 
            is_pretty = False
        if is_callback:
            is_callback = True
        else:
            is_callback = False

    ddg = duckduckgo.Duckduckgo()
    ddg.build_parms(q, is_json,
                       safe_search,
                       is_callback,
                       is_pretty,
                       no_html,
                       no_redirect,
                       skip_disambig)
    ddg.build_query_url()
    data = ddg.request()
    
    if data:
        pydat = duckduckgo.json2py(data)
        r = duckduckgo.Result(pydat)
        print('heading=%s' % r.heading())
        print('answer=%s' % r.answer())
        print('definition=%s' % r.definition())
        print('abstract=%s' % r.abstract())
    else:
        print("error: can't request data")
# main cli entry point
if __name__ == "__main__":
    q = 'neil young'
    main(q)


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab
