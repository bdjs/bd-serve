'use strict';

var path = require('path');
var serve = require('bd-static-new');
var views = require('bd-views');
var assign = require('object-assign');

module.exports = function(app) {
  var apps = Object.keys(app.apps);
  apps.map(function(key) {
    app.use(serve(path.join(app.apps[key], 'public'), key));
    if (!app.configs.views) {
      return;
    }
    var config = app.configs.views[key];
    if (!config) {
      return;
    }
    config = assign(config, {
      key: key,
      path: path.join(app.apps[key], 'views')
    });
    app.use(views(config));
  })
};
