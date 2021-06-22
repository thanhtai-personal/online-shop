
describe('DemoService1Service Tests', function() {

  var demoservice1Service;

  beforeEach(function() {
    demoservice1Service = require('../../../../app/services/circus/demoservice1-service');
  });

  describe('lookupDemoService1', function() {

    it('should be a function', function(done) {
      expect(demoservice1Service.lookupDemoService1).to.be.a('function');
      done();
    });

  });
});
