andela-badge
==================
[![Build Status](https://travis-ci.org/andela-stuff/andela-badge.svg?branch=master)](https://travis-ci.org/andela-stuff/andela-badge)
[![Andela](https://andela-badge.herokuapp.com/)](https://andela.com)
[![Andela](https://andela-badge.herokuapp.com/)](https://andelaa.com)
[![Heroku](https://heroku-badge.herokuapp.com/?app=andela-badge&style=flat)](https://andela-badge.herokuapp.com)

##Usage

Create an `img` with src `https://andela-badge.herokuapp.com`. E.g.,

HTML:
    <img src="https://andela-badge.herokuapp.com" />
    
Markdown:

    [![Heroku](https://andela-badge.herokuapp.com)]   

Support now flat badge design.

HTML:
    <img src="http://heroku-badge.herokuapp.com/?app=angularjs-crypto&style=flat" />

Markdown:

    [![Heroku](http://heroku-badge.herokuapp.com/?app=angularjs-crypto&style=flat)]

Support now svg images.

HTML:
    <img src="http://heroku-badge.herokuapp.com/?app=angularjs-crypto&style=flat&svg=1" />

Markdown:

    [![Heroku](http://heroku-badge.herokuapp.com/?app=angularjs-crypto&style=flat&svg=1)]
    
Support use custom page

The query parameter root is used to specify a different url to perform the check get request.
The following example will check if the the url 'https://angularjs-crypto.herokuapp.com/index.html' 
return response status code 200 or 401 and display the proper badge image for it.

HTML:
    <img src="http://heroku-badge.herokuapp.com/?app=angularjs-crypto&style=flat&svg=1&root=index.html" />

Markdown:

    [![Heroku](http://heroku-badge.herokuapp.com/?app=angularjs-crypto&style=flat&svg=1&root=index.html)]


##Copyright

The badges are made by me but feel free to use and copy it of course you have to copy it into your heroku app.

License
--------------

heroku-deployment-badges is released under the [MIT License](http://opensource.org/licenses/MIT).
