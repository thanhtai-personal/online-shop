
describe('DemoController1Controller Tests', function() {

  var democontroller1Controller;
  var req;
  var res;
  var next;

  beforeEach(function() {
    req = {};
    res = { status: function(code) { return { json: function(obj) {} }} };

    sinon.spy(res, "status");

    democontroller1Controller = require('../../../../../app/controllers/v1/circus/democontroller1-controller');
  });

  describe('post()', function() {

    it('should be a function', function(done) {
      expect(democontroller1Controller.post).to.be.a('function');
      done();
    });

    it('should call res.status() one time', function(done) {
      democontroller1Controller.post(req, res, next);

      expect(res.status.callCount).to.equal(1);
      done();
    });

    it('should call res.status() with 200', function(done) {
        democontroller1Controller.post(req, res, next);

      expect(res.status.calledWith(200)).to.equal(true);
      done();
    });

  });
});
