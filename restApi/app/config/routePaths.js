const { routes = [] } = require('./route.config.json')

let publicRoutes = []
let adminRoutes = []
let routePaths = {}

for (let route of routes) {
  routePaths[route.key.toUpperCase()] = route.route
  if (route.isAdmin) {
    adminRoutes.push(route.route)
  }
  if (route.isPublic) {
    publicRoutes.push(route.route)
  }
}

module.exports = {
  publicRoutes,
  adminRoutes,
  routePaths
}