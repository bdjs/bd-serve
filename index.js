'use strict'

const path = require('path')
const serve = require('bd-static')

module.exports = function (app) {
  console.log('build serve')
  let apps = Object.keys(app.apps)
  apps.forEach(key => {
    app.use(serve(path.join(app.apps[key], 'public'), key))
  })
}
