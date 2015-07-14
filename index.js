'use strict';

var serve = require('bd-static');
var path = require('path');

module.exports = function (app) {
  var keys = Object.keys(app.apps);
  keys.map(function (key) {
    app.use(serve(path.join(app.apps[key], 'public'), key))
  })
};