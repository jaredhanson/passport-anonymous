# passport-anonymous

[![Build](https://travis-ci.org/jaredhanson/passport-anonymous.png)](https://travis-ci.org/jaredhanson/passport-anonymous)
[![Coverage](https://coveralls.io/repos/jaredhanson/passport-anonymous/badge.png)](https://coveralls.io/r/jaredhanson/passport-anonymous)
[![Quality](https://codeclimate.com/github/jaredhanson/passport-anonymous.png)](https://codeclimate.com/github/jaredhanson/passport-anonymous)
[![Dependencies](https://david-dm.org/jaredhanson/passport-anonymous.png)](https://david-dm.org/jaredhanson/passport-anonymous)
[![Tips](http://img.shields.io/gittip/jaredhanson.png)](https://www.gittip.com/jaredhanson/)


[Passport](http://passportjs.org/) strategy for anonymous authentication.

This module lets you provide anonymous authentication in your Node.js
applications.  By plugging into Passport, anonymous authentication can be easily
and unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

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
          res.json({ name: 'anonymous' });
        }
      });

## Examples

For a complete, working example, refer to the [login example](https://github.com/jaredhanson/passport-anonymous/tree/master/examples/basic).

## Tests

    $ npm install
    $ npm test

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/vK9dyjRnnWsMzzJTQ57fRJpH/jaredhanson/passport-anonymous'>  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/vK9dyjRnnWsMzzJTQ57fRJpH/jaredhanson/passport-anonymous.svg' /></a>
