var vows = require('vows');
var assert = require('assert');
var util = require('util');
var anonymous = require('..');


vows.describe('passport-anonymous').addBatch({
  
  'module': {
    'should export Strategy': function (x) {
      assert.isFunction(anonymous.Strategy);
    },
  },
  
}).export(module);
