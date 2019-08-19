'use strict';

const fs = require('fs')
const path = require('path')

let def = require('./global-default')

if (fs.existsSync(path.join(__dirname, './global-user.js'))) {
  def = Object.assign(def, require('./global-user'))
}

module.exports = (env) => {
  def[env].env = env
  return def[env]
}
