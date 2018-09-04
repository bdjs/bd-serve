const path = require('path')
const serve = require('bd-dist')

module.exports = app => {
  const apps = Object.keys(app.apps)
  apps.forEach(key => {
    app.use(serve(path.join(app.apps[key], 'public'), key))
  })
}
