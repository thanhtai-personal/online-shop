
function DemoController1Controller() {
}

function post(req, res, next) {
  res.status(200).json({ hello: 'world' });
}

DemoController1Controller.prototype = {
  post: post
};

var democontroller1Controller = new DemoController1Controller();

module.exports = democontroller1Controller;
