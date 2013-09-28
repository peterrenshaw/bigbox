
        __     _         __                
       / /_   (_)____ _ / /_   ____   _  __
      / __ \ / // __ `// __ \ / __ \ | |/_/
     / /_/ // // /_/ // /_/ // /_/ /_>  <
    /_.___//_/ \__, //_.___/ \____//_/|_| [1]
              /____/                       


  name hack-bigbox-a-basic-unit-of-hack-time.txt
  date 2013SEP28
  prog @peterrenshaw
  desc BIGBOX: A easy to use front end for socsim. This 
       hack, BIGBOX search allows for search within or external 
       to you local system.
  

# A basic measure of hacking time


### Abstract

    "What I find myself repeating is, 'pump out features'
     ... By 'feature' I mean one unit of hacking time --
     one quantum of making users' lives better." 
     Paul Graham [0]

The first demo for *"bigbox"* went ok, it worked. Going back over my 
commit stats I found it took about a month to get the entire idea 
into my head. Once it was in my head I could very quickly hack up 
something new and I use the term hack literally, to build a basic
demo.

   **BUT**: a basic unit of hacking time to complete a feature.

### **BUT**

The question I ask myself now is, *"what is the basic unit of hack
time?"*. How long does it take?  So the first thing I propose is a 
definition of hacking time, the BUhT (Basic Unit of hack Time).


### **BUT** for short. 

The idea behind the **BUT** has been described before and I'm just 
branding the idea with a simple acronymn. What I'm really interested
in is working out what retards hackers estimating and completing
a **BUT**? So I'll attempt to explain this to myself.

A good estimation of **BUT**s requires you to understand how the following
concepts interact with estimation:

* feature
* the unknown
* allowable time
* estimate


Lets look at these constraints and see what effect they have on **BUT**s.


### Feature

If users love features, they hate defining them. It's universally recognised
that if you ask a user about a feature they desperatly want they have an outline
of an idea what they want. Ask a specific question about that feature will probably
be met with blank stares. Defining a **BUT** for a feature will require some negotiation
between user and developer. A stick has to be put in the ground marking the boundary
of a feature. Let the haggling begin.

### The unknown

**BUT**s and time estimation have an uneasy relationship. You can try to estimate
how long something is going to take, only to run into an unknown problem. which 
usually means it's something you don't understand. Diagnosing an unknown will 
impact **BUT** estimation. Don't know what you are dealing with? It will take 'N' 
units of time to work out what is going on. Until you make unknowns, known **BUT**
estimation is unreliable.  Change the status of an unknown to a known.


### Knowledge

Lack of key knowledge is a key factor for being unable to estimate **BUT**s. If you 
don't understand what is going on due to a lack of knowledge, accurate **BUT** 
estimation will not be possible. Correct your lack of knowledge.


### Time

Estimating time per **BUT** is also slippery. Fixing something simple as a
spelling mistake is not the same order of magnitude as re-writing a module
of code from scratch. Define what you mean by time, an hours worth>, a day?
a week? If the time is longer than a week, say a month then that's an indicator 
something is wrong. Is it an undefined feature, lack of knowledge or is it 
an unknown unknown?  Define your time estimate.


### Estimation

So how do you estimate **BUT**?  The relationship between a feature and time
is related. Time is effected also by the presence of unknowns and lack
of knowledge. So given a feature is properly understood, no unknowns have
been identified and is within the knowledge of the developer you should 
be able to estimate what feature you want, how long you expect it in given 
that you have scoped the knowledge requirements, excluding unknown, unknowns.


A **BUT** may be an hour, it may stretch for weeks, **BUT** if it does that's a sign
things are going off track.  A **BUT** is an estimation of how long a feature will 
take given the constraints of time, knowledge and the certainty of known, knowns.


## Referece

[0] Paul Graham, *'The hardest lessons'*,
[Last Accessed Wednesday 18th September, 2013 ] 
<http://www.paulgraham.com/startuplessons.html>

[1] If you wanted to find the real reason the car won't 
start you would pull open the hood and check either the fuel 
supply, the timing and finally the spark. One of those three
things is probably the cause. It's the same in programming: 
to find a solution you have to understand the problem space and
technology being used.


# vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab
