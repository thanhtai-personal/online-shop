
function DemoService1Service() {
}

function lookupDemoService1(id) {
  return { id: id };
}

DemoService1Service.prototype = {
  lookupDemoService1: lookupDemoService1
};

var demoservice1Service = new DemoService1Service();

module.exports = demoservice1Service;
