
const http = require('http');
const express = require('express');
const application = express();
const bodyParser = require('body-parser');
const routeConfig = require('./route-config');
const settingsConfig = require('./settings/settings-config');
const middleWares = require('./../middlewares')


function configureApplication(application) {
  application.use(bodyParser.json());

  //custom middlewares
  for (let middleWare of middleWares) {
    application.use(middleWare)
  }
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