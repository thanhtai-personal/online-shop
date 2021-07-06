const { routes = [] } = require('./route.config.json')

const routePaths = {}

for (let route of routes) {
  routePaths[route.key.toUpperCase()] = route.route
}

module.exports = routePaths