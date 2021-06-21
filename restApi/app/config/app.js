const http = require('http');
const express = require('express');
const application = express();
const bodyParser = require('body-parser');
const routeConfig = require('./route-config');
const settingsConfig = require('./settings/settings-config');


function configureApplication(application) {
  application.use(bodyParser.json());

  application.use(function(req, res, next) {
    res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    res.type('application/json');
    next();
  });
}

function configureRoutes(application) {
  routeConfig.registerRoutes(application);
}

function startServer(application) {
  var server = http.createServer(application);

  server.listen(settingsConfig.settings.workerPort, settingsConfig.settings.hostName, settingsConfig.settings.queueLength, function() {
    console.log('listening at http://%s:%s', settingsConfig.settings.hostName, settingsConfig.settings.workerPort);
  });
}

const getApp = () => {
  return application
}

module.exports = {
  getApp,
  configureApplication,
  configureRoutes,
  startServer,
}