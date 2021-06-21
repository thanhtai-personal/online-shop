
describe('UserRepository Tests', function() {

  var userRepository;

  beforeEach(function() {
    userRepository = require('../../../../app/repositories/circus/user-repository');
  });

  describe('getUserData()', function() {

    it('should be a function', function(done) {
      expect(userRepository.getUserData).to.be.a('function');
      done();
    });

  });
});
