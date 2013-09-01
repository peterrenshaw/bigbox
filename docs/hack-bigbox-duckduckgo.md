        __     _         __
       / /_   (_)____ _ / /_   ____  _  __  
      / __ \ / // __ `// __ \ / __ \| |/_/
     / /_/ // // /_/ // /_/ // /_/ /_> <
    /_.___//_/ \__, //_.___/ \____//_/|_| [1]
              /____/


    name hack-bigbox-duckduckgo.md
    date 2013AUG18
    prog @peterrenshaw
    desc BIGBOX: A easy to use front end for socsim. This 
         hack, BIGBOX search allows for search within or 
         external to you local system.

         I want to use the Duckduckgo instant answers API to 
         make queries. Here's my reasoning in re-writing some/all
         of an existing bit of open source code.


## Abstract

Why write python code for the Duckduckgo Instant Answers API, when 
there's a perfectly good bit of existing code that can do the job?  Explain why not using the [python-duckduckgo module](https://github.com/crazedpsyc/python-duckduckgo)? [2]


### New over old

I want some kind of basic search interaction on a local client tool
I'm working and so I looked for existing code to do this. It wasn't hard, 
the Duckduckgo instant answers API has quite a collection of code to do this.
So I downloaded the code, played with it for a while. It works and is easy 
enough to understand.

Then I pressed a little harder... can I install and use the code with Python3 
and Python2? What about testing? Is there any test code if I want to change 
or make some modifications? Oh.


* Installing
* Python 3
* Rewrite everything?
* Testing
* Request
* Permission
* Restrictions
* Giving back


#### Installing

No install script. Have to write a new install script. Do-able. Not hard.


#### Python3

When I used the existing code in python2X it works. When I used the code
in Python3 it breaks. Bugger, why?

Here's what I found. The code utilises *urllib2*. Urllib2 is not supported in
Python3. Well it is, but Python3 consolidates the code into urllib. So code that
works in Python2X

    from urllib import request as Request

becomes this code in Python3...

    from urllib2 import Request

This sucks! Also the urllib code pretty rusty. Is there a replacement or better choices?


#### Request

Why use urllib2/urllib? Is there a better, more reliable, easier to use piece of code I can use? 
Yes. It's called [python-requests](http://docs.python-requests.org/en/latest/). It also works the 
same way on Python2X and Python3. So I'll use this. The reason is the simplicity of the code. It's that simple. 
However this means a dependency. One of the advantages of the *python-duckduckgo* code is it's simplicity. It's 
all there in the code. You don't need any downloads to use it. Hats off for this.


#### Rewrite everything?

Do I rewrite all the code or just some? At the moment I've re-written the basic query 
building and request engine, nothing else. I still haven't written any way to extract 
the data nor have I written a the useful *get_zci* module. I'm still working on how to 
read the data... still digesting the structure.


#### Testing

The *python-duckduckgo* module has no testing. So if I use the code I'm going to be
writing some test code just to measure any side effects I might make modifing the code. 
That sucks. So I'm going to be writing test code.


#### Permission

    R 18 'It's better to seek forgiveness than ask permission.' #gibbsrules #ncis S3E04

I'm new to the idea of hacking *"other peoples code"*. You need to get permission to make the 
changes, explain the reasons and get things moving. For the moment I can't afford this. I need 
to work and fast. So I'm just going to hack on my code without asking permission.

#### Restrictions

Duckduckgo is a commercial organisation. But it's roots are [pure hacker](https://dukgo.com/). Started by [Gabriel Weinberg](http://about.gabrielweinberg.com/)
this search engine allows non-human access to search results, but with restrictions. Details of the 
restrictions can be found at the [Duckduckgo, Instant Answer API](https://api.duckduckgo.com/api). [3] There are quite a few caveats and 
I'll be sticking to the requirements and the intent to the best of my ability.  


#### Giving back

One of the reasons I'm writing this quick note is to remind myself that building this code is at the 
expense of the original code. So it's my intention to look into improving the existing code for the
[python-duckduckgo]() code when I get the chance. Move it to Python3 and add some testing. This is important
as the code works, is simple to understand and already exists. It's going to take a bit of time and discussion
to do this. At the time I don't have this luxury.


### Conclusions

I'm writing a module that queries the DUckduckgo Instant Answers API that works on both Python2X and Python3.
It will utilise the simplier python-requests in preference to the Python3 *urllib.request* and the Python2X 
*urllib2.request* calls. I'm aware of the restrictions Duckduckgo requires with this access and at some time
in the future work to improve the existing python-duckduckgo module.




### Resources

[1] Title created with an ASCII text generator using 'slant' and 
'stretch=Yes". The code is based on Figlet which can be found 
here:

  <http://www.figlet.org/>

[Last accessed: Sunday 4th August, 2013]

<http://www.network-science.de/ascii/>

[2] python-duckduckgo

<https://github.com/crazedpsyc/python-duckduckgo>

[Last accessed: Sunday 1st September, 2013]

[3] Duckduckgo, Instant Answer API

<https://api.duckduckgo.com/api>

[Last accessed: Sunday 1st September, 2013]


vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab

