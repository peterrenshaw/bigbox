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


## abstract

    A simple search form for N, where N is something to search. A search
	could be externally for twitter or a search engine. Search could be
	offline and be something local. 	
	

I've been knee-deep looking into how I need to connect the back-end to the 
front-end. So while I'm thinking about this, I'll divert some time into 
working out a way to handle search with bigbox.


## Big picture

  Remember google when it first come out? 
  
  I did. It was during the late 90's and it was so simple. You just put 
stuff you wanted to search for in a plain text box, hit a button and instant 
results. It was a big step from the complicated, text orientated, pre-web 
search engines like GOPHER. An ecosystem of search grew on the back of the
instroduction of the web. Yahoo, Ask Jeeves, AltaVista. It was google that 
managed to break free from the rest by using a simple box with minimal 
controls and a list of results.


### What happened to the simplicity of search?

  The simplicity of a single control is obvious, it just works. As you add
more and more services if you aren't careful, the screen real-estate is 
eaten up with links, controls. Crap.  Now you can't use google without the 
threat of being diverted from your original link. Google has done this for 
a good reason though, there are more things to search for. That and the 
marketing department got involved. 

Underneath, it's still that simple to use google. Currently the best example 
of *old-school* search is DuckDuckGo (DDG). *DDG* also doesn't keep logs, so 
you also get less spying, for free.


### Bang keywords 

  And so it's from DDG that I'm taking my cues for BigBox. A clean simple
text box, a list of search results and BANGS. You can read more about Bangs 
keywords here. Bangs is just another way to control how you search using 
text controls. Using controls in search has the following advantages:

* simplicity of controls
* reduces valuable on-screen clutter
* growth of controls
    
The idea of Bang keyword controls also has a key disadvantage:

* introduce exta complexity to user

The key idea behind bigbox is to simplify the interface but maintain the
ability to do complex things behind the scenes. The downside is the 
operator will have to know what they are doing and be explicit.


### How?

The interface consists of a big text entry box and results box underneath. To
enter information you type into the box. The results are displayed under the
input box. There is nothing new about this.

#### Input

So how do we SPECIFY what we want to search for? How do we select WHAT service
we want to search? How do we RESTICT or CONTROL the output? For the moment
lets restrict our discussion to Input and while we are at it introduce a few
key ideas.

* Service

* Search item

* keywords

* logic


##### Service

    It's quite possible we may want to look for many different things. For
example we might want to search for something on twitter and somewhere else on
the Open Web.  The idea of a service is simple a name for a place we want to
search. Twitter is a service. We want to search Twitter for particular people,
tags or information.  

  What about if we want to search for something on the Open Web? The
DuckDuckGo search engine is another service we could use. Each service
requires some code behind it to look into the guts to extact useful
information. I'm not talking screen-scraping here. I'm really talking about
talking directly to the exposed programming interfaces known as API's (or
Application Progarmming Interfaces.)  For Search we will start with the
following services:

* Twitter

* DuckDuckGo

* Local

These three services are crucial to find and search for information.

##### Search item

  A search item or key, is the text you are looking for. Nothing complex here.

##### Keyword

  The Bang keyword syntax, used in DuckDuckGo illustrates how we can use a
simple text command followed by a search item to give the user extra control
of WHERE they want to search with the supplied, 'search item'.


##### Logic

  For search an example of logic is a boolean search which introduces the
concept of AND/OR Union of results.


### More input

    So lets put all the theory into a concrete example and show how to use the
ideas of services, search items, keywords and logic for the Input control.

    #==================================================================#
    #                                                                  #
    #                                                                  #
    #                                                                  #
    #==================================================================#

Example: search for George on twitter

  Here's our input box. Lets outline some input using the ideas above. Lets
search for George on twitter. The logic is something like this:

    Service    Search item    Keyword    Logic
    ------------------------------------------
    twitter    @geehall1      person:    ----

What I would enter into the bigbox would be:

    twitter: person:@geehall1

   What happens now, is the line is parsed. We know the service we want to 
search is Twitter by the service keyword, 'twitter:' and anything after this 
is to be read to use this service. The keyword is 'person:' and the search 
item is Georges' twitter handle, '@geehall1'. There is no logic required.
Forget the result(s) at the moment.


Example: search for George on the Open Web and see if we can find any URLs?

  The logic would be something like this, 

    Service    Search item    Keyword    Logic
    ------------------------------------------
    DDG        George Hall    url:       ----

  Brad enters the following into the BigBox:

    ddg: george hall url:

   BigBox reads the service and sees it's looking for all returns of *george
hall* (note no explicit quotes) and returns all the url's associated with
George.

Example: search for Peter on the Open Web and see if twitter name
         matches OpenWeb search for Peter.

    The logic would be something like this,

    Service    Search item 1    Search item 2    Keyword    Logic
    DDG        @bootload        peter renshaw    all:       and:

  So Brad enters the following into BigBox:

    ddg: @bootload and: peter renshaw all:

  The result should be a match showing any relationship between the Twitter
handle, *@bootload* and *peter renshaw*.

Example: search Twitter for a hashtag.

  The logic would be something like,

    Service    Search item    Keyword 1    Keyword 2    Logic
    twitter    #TTFN          text:        created:     ----

  So Brad enters into the BigBox,

    twitter: #TTFN text: created:

  The results should return the hashtag, *TTFN* and the associated text and
time it was created.



Input  
    input description

Output
    output description
    




### Resources

[1] Title created with an ASCII text generator using 'slant' and 
'stretch=Yes". The code is based on Figlet which can be found 
here ~ <http://www.figlet.org/>
[Last accessed: Sunday 4th August, 2013]
<http://www.network-science.de/ascii/>


vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab


