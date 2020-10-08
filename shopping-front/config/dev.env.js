'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BACK_HOST: '"192.168.99.100"',
  BACK_PORT: '"3000"',
  BACK_PROTOCOL: '"http"'
})
