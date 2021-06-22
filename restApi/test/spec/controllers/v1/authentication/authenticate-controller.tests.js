
describe('AuthenticationController login Tests', function() {

  let authenticationController;
  let req;
  let res;
  let next;

  beforeEach(function() {
    req = {};
    res = { status: function(code) { return { json: function(obj) {} }} };

    sinon.spy(res, "status");

    authenticationController = require('../../../../../app/controllers/v1/circus/democontroller1-controller');
  });

  describe('login()', function() {

    it('should be a function', function(done) {
      expect(authenticationController.login).to.be.a('function');
      done();
    });

    it('should call res.status() one time', function(done) {
      authenticationController.login(req, res, next);

      expect(res.status.callCount).to.equal(1);
      done();
    });

    // it('should call res.status() with 200', function(done) {
    //     authenticationController.login(req, res, next);

    //   expect(res.status.calledWith(200)).to.equal(true);
    //   done();
    // });

  });
});


describe('AuthenticationController register Tests', function() {

  let authenticationController;
  let req;
  let res;
  let next;

  beforeEach(function() {
    req = {};
    res = { status: function(code) { return { json: function(obj) {} }} };

    sinon.spy(res, "status");

    authenticationController = require('../../../../../app/controllers/v1/authentication/democontroller1-controller');
  });

  describe('register()', function() {

    it('should be a function', function(done) {
      expect(authenticationController.register).to.be.a('function');
      done();
    });

    it('should call res.status() one time', function(done) {
      authenticationController.register(req, res, next);

      expect(res.status.callCount).to.equal(1);
      done();
    });

    // it('should call res.status() with 200', function(done) {
    //     authenticationController.register(req, res, next);

    //   expect(res.status.calledWith(200)).to.equal(true);
    //   done();
    // });

  });
});
