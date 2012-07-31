# Passport-Anonymous

[Passport](http://passportjs.org/) strategy for anonymous authentication.

This module lets you provide anonymous authentication in your Node.js
applications.  By plugging into Passport, anonymous authentication can be easily
and unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Installation

    $ npm install passport-anonymous

## Usage

#### Configure Strategy

The anonymous authentication strategy passes authentication for a request,
with `req.user` remaining `undefined`.

    passport.use(new AnonymousStrategy());

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'anonymous'` strategy, to
pass authentication of a request.  This is typically used alongside a strategy
that verifies credentials, as a fallback for routes that prefer authentication
but can also respond to unauthenticated requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.post('/hello', 
      passport.authenticate(['basic', 'anonymous'], { session: false }),
      function(req, res) {
        if (req.user) {
          res.json({ name: req.user.username });
        } else {
          res.json({ anonymous: true });
        }
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/jaredhanson/passport-anonymous/tree/master/examples/basic).

## Tests

    $ npm install --dev
    $ make test

[![Build Status](https://secure.travis-ci.org/jaredhanson/passport-anonymous.png)](http://travis-ci.org/jaredhanson/passport-anonymous)

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

(The MIT License)

Copyright (c) 2011 Jared Hanson

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
