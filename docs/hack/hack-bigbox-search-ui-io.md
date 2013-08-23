        __     _         __
       / /_   (_)____ _ / /_   ____  _  __  
      / __ \ / // __ `// __ \ / __ \| |/_/
     / /_/ // // /_/ // /_/ // /_/ /_> <
    /_.___//_/ \__, //_.___/ \____//_/|_| [1]
              /____/


  name hack-bigbox-search-ui-io.md
  date 2013AUG18
  prog @peterrenshaw
  desc BIGBOX: A easy to use front end for socsim. This 
       hack, BIGBOX search allows for search within or 
	   external to you local system.


### abstract

    A simple search form for N, where N is something to search. A seach
	could be externally for twitter or a search engine. Search could be
	offline and be something local. 	
	

I've been knee-deep looking into how I need to connect the back-end to the 
front-end. So while I'm thinking about this, I'll divert some time into 
working out a way to handle search with bigbox.


## Big picture

  Remember google when it first come out? I did. It was during the late 90's
and it was so simple. You just put stuff you wanted to search for in a plain 
text box, hit a button and instant results. It was a big step from the 
complicatedtext orientated pre-web search engine, GOPHER. An ecosystem of 
search grew on the back of the instroduction of the web. Yahoo, Ask Jeeves, 
AltaVista. It was google that managed to break free from the rest by using 
a simple box with minimal controls and a list of results.


### What happened to the simplicity of search?

  The simplicity of a single control is obvious, it just works. As you add
more and more services if you aren't careful, the screen real-estate is eaten
up with links, controls. Crap.  Now you can't use google without the threat 
of being diverted from your original link. Google has done this for a good 
reason though, there are more things to search for. That and the marketing 
department got involved. Underneath, it's still that simple to use google.
Currently the best example of *old-school* search is DuckDuckGo (DDG). DDG 
also doesn't keep logs, so you also get less spying, for free.


### Bang keywords 

  And so it's from DDG that I'm taking my cues for BigBox. A clean simple
text box, a list of search results and BANGS. You can read more about Bangs 
keywords here. Bangs is just another way to control how you search using 
text controls. Using controls in search has the following advantages:

    simplicity of controls
    reduces valuable on-screen clutter
    growth of controls
    
The idea of Bang keyword controls also has a key disadvantage:

    introduction of exta complexity to the user,

The key idea behind bigbox is to simplify the interface but maintain the
ability to do complex things behind the scenes. The downside is the 
operator will have to know what they are doing and be explicit.


### How?




Concepts

Services

Search

Key

Input  
    input description

Output
    output description
    




Resources

[1] Title created with an ASCII text generator using 'slant' and 
'stretch=Yes". The code is based on Figlet which can be found 
here ~ <http://www.figlet.org/>
[Last accessed: Sunday 4th August, 2013]
<http://www.network-science.de/ascii/>


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab


