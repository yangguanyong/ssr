module.exports = {
  dao: {
    getComment: {
      path: '/api/getComment',
      type: 'get',
      param: {
      }
    },
    addComment: {
      path: '/api/addComment',
      type: 'post',
      param: {
        comment: '这是测试的post'
      }
    }
  }
}