var chai = require('chai')
  , Strategy = require('../lib/strategy');


describe('Strategy', function() {
    
  var strategy = new Strategy(function(){});
    
  it('should be named anonymous', function() {
    expect(strategy.name).to.equal('anonymous');
  });
  
  describe('handling a request', function() {
    var ok;
    
    before(function(done) {
      chai.passport(strategy)
        .pass(function() {
          ok = true
          done();
        })
        .req(function(req) {
        })
        .authenticate();
    });
    
    it('should call pass', function() {
      expect(ok).to.be.true;
    });
  });
  
});
