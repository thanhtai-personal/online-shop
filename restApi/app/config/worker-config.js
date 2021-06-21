const applicationManager = require('./app')
const application = applicationManager.getApp()

const { configureApplication, configureRoutes, startServer } = applicationManager

function configureWorker(application) {
  configureApplication(application);
  configureRoutes(application);

  startServer(application);
}

configureWorker(application);
