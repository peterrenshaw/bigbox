        __     _         __
       / /_   (_)____ _ / /_   ____  _  __  
      / __ \ / // __ `// __ \ / __ \| |/_/
     / /_/ // // /_/ // /_/ // /_/ /_> <
    /_.___//_/ \__, //_.___/ \____//_/|_| 
              /____/


    name hack-bigbox-three-little-pigs.md
    date 2013SEP04
    prog @peterrenshaw
    desc BIGBOX: A easy to use front end for socsim. This 
         hack, BIGBOX search allows for search within or 
         external to your local system.


# Three little pigs

#### Abstract

    Once there were three little pigs. They each needed to build 
    REST api servers in Python, quickly.


Once there were three little pigs. They each needed to build REST api 
servers in Python.


### First little pig

    # "Tornado is a Python web framework and asynchronous 
    # networking library, originally developed at FriendFeed. 
    # By using non-blocking network I/O, Tornado can scale to 
    # tens of thousands of open connections, making it ideal 
    # for long polling, WebSocket" [0]

    import tornado.ioloop
    import tornado.web

    class MainHandler(tornado.web.RequestHandler):
        def get(self):
            self.write("Hello, world")

    application = tornado.web.Application([
        (r"/", MainHandler),
    ])

    if __name__ == "__main__":
        application.listen(8888)
        tornado.ioloop.IOLoop.instance().start()

The first little pig decided to use a really, really good webserver. It's
called Tornado. *"My REST api is going to withstand a torrent of slashdot
hacks"*, said the first little pig.


And so the pig built a nice little REST api server utilising all the 
technical resources that **[Tornado](http://www.tornadoweb.org/en/stable/)** has built in. That's right Tornado 
will run out of the box. And it works with Python 2.6, 2.7, 3.2, and 
the latest, the holy grail of Python, **version 3.3**.  It's great thought the first 
little pig. It's got, *"non-blocking network I/O"* and *"Tornado can scale 
to tens of thousands of open connections"* and best of all it, *"long-lived
 connection to each user"*.  Just the things I need. And so the first little
pig sat down and hacked, hacked and hacked.


### Second little pig

    # "Flask is a microframework for Python 
    # based on Werkzeug, Jinja 2 & good 
    # intentions" [1]

    from flask import Flask
    app = Flask(__name__)

    @app.route("/")
    def hello():
        return "Hello World!"

    if __name__ == "__main__":
       app.run()

The second little pig looked over the first little pigs shoulder and 
grunted, I'll can do much better than this. The second little pig looked 
for a much simplier way to build the REST api server. The second little pig
decided to use **[Flask](http://flask.pocoo.org/)**. Flask is well suited for fast development, runs in 
Python 2 and Python 3. I'm set. So the second little pig read a great 
tutorial by [Miguel Grinberg](http://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask) [2] and hacked and hacked and hacked away.


### Third little pig


    # Bottle is a fast, simple and lightweight WSGI micro web-framework 
    # for Python. It is distributed as a single file module and has no 
    # dependencies other than the Python Standard Library. [3]

    from bottle import route, run, template

    @route('/hello/<name>')
    def index(name='World'):
        return template('<b>Hello {{name}}</b>!', name=name)

    run(host='localhost', port=8080)

The third little pig scratched himself with his hoof. He looked at the 
problem and realised that the fastest route might be to use a simple approach. 
There's no chance of being slashdotted on your own server and you get almost
as much as tools the second little pig. So the third little pig looked over the 
second little pigs' shoulder and ported the second little pigs REST api server 
using a simple framework called [Bottle](http://bottlepy.org). The first little
pig snorted, the second grunted. *"Bottle, wattle"* they chanted. The third little
pig smiled. He knew a secret and he wasn't about to let it out. So he hacked and
hacked and hacked away.


### The big bad wolf


The along comes along the big bad wolf.  The first little pig looked at the wolf
and scoffed. *"My REST api is capable of supporting thousands of connections. It 
works on most version of Python and it's really really good. I'm almost ready."*

The wolf looked at the first pig, shook his head and said, "give it to me now,
and if you don't I'll eat you up." and promptly ate the first little pig.

The wolf looked at the second little pig, a trotter still in his mouth. The second 
little pig smiled, *"It's ready. It's ready right now but I've got a problem install it.
There's all these dependencies you see. I can't put it on other machines without
finding a way to add all these other modules. Those modules have other modules."*

Oh, the dependencies.  The wolf looked at the second little pig and said, *"give 
me the code and if you don't I'll eat you up."*  Before the second little pig could
say *"but the code is stateless, cacheable, layered and uniform"*, the wolf gobbled 
her up.

The wolf looked at the third little pig. The third little pig stared back.

The third little pig then sat down, gave a demo and the wolf smiled. It wasn't 
that flash, but it worked, with less complexity. Some bugs might be found but these
can be sorted along with the installation. 

The demo worked and the wolf was pleased.


### Resources

[0] **Tornado**

<http://www.tornadoweb.org/en/stable/>

[Last accessed: Wednesday 4th September, 2013]

[1] **Flask**

<http://flask.pocoo.org/>

[Last accessed: Wednesday 4th September, 2013]

[2] **Miguel Grinberg**, *"Designing a RESTful API with Python and Flask"*

<http://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask>

[Last accessed: Wednesday 4th September, 2013]


vim: ff=unix:ts=4:sw=4:tw=78:noai:expandtab

