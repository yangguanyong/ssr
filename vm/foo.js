var http = require('./../util/http')

module.exports = function * () {
  return {
    menu: JSON.parse((yield * http.get('/api/getComment'))).comment,
    comment: JSON.parse((yield * http.get('/api/getComment'))).comment,
  }
}