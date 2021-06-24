
const http = require('http');
const express = require('express');
const application = express();
const bodyParser = require('body-parser');
const routeConfig = require('./route-config');
const settingsConfig = require('./settings/settings-config');
const compression = require('compression')

function configureApplication(application) {
  application.use(bodyParser.json());

  application.use(function(req, res, next) {
    res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    res.type('application/json');
    next();
  });
  // Use gzip compression
  application.use(compression({ filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      // don't compress responses with this request header
      return false
    }
   
    // fallback to standard filter function
    return compression.filter(req, res)
  } }))
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