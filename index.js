'use strict'

const path = require('path')
const serve = require('bd-dist')

module.exports = function (app) {
  let apps = Object.keys(app.apps)
  apps.forEach(key => {
    app.use(serve(path.join(app.apps[key], 'public'), key))
  })
}
