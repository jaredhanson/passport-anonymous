var vows = require('vows');
var assert = require('assert');
var util = require('util');
var AnonymousStrategy = require('passport-anonymous/strategy');


vows.describe('AnonymousStrategy').addBatch({
  
  'strategy': {
    topic: function() {
      return new AnonymousStrategy();
    },
    
    'should be named session': function (strategy) {
      assert.equal(strategy.name, 'anonymous');
    },
  },
  
  'strategy handling a request': {
    topic: function() {
      var strategy = new AnonymousStrategy();
      return strategy;
    },
    
    'after augmenting with actions': {
      topic: function(strategy) {
        var self = this;
        var req = {};
        strategy.success = function(user) {
          self.callback(new Error('should-not-be-called'));
        }
        strategy.fail = function() {
          self.callback(new Error('should-not-be-called'));
        }
        strategy.pass = function() {
          self.callback(null, req);
        }
        
        req.body = {};
        process.nextTick(function () {
          strategy.authenticate(req);
        });
      },
      
      'should not generate an error' : function(err, req) {
        assert.isNull(err);
      },
      'should not authenticate' : function(err, req) {
        assert.isUndefined(req.user);
      },
    },
  },

}).export(module);
