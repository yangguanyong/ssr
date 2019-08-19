'use strict';

module.exports = {
  development: {
    server: {
      path: 'http://cepin.dev'
    },
    client: {
      port: 9405
    }
  },
  test: {
    server: {
      path: 'http://cepin.test'
    },
    client: {
      port: 3001
    }
  }
}