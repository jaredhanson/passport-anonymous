var vows = require('vows');
var assert = require('assert');
var util = require('util');
var anonymous = require('passport-anonymous');


vows.describe('passport-anonymous').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(anonymous.version);
    },
    
    'should export Strategy': function (x) {
      assert.isFunction(anonymous.Strategy);
    },
  },
  
}).export(module);
