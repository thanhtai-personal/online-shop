
function UserRepository() {
}

function getUserData(id) {
  return { id: id };
}

UserRepository.prototype = {
    getUserData: getUserData
};

var userRepository = new UserRepository();

module.exports = userRepository;
