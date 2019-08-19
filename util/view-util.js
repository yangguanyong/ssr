const isDev = process.conf.env === 'development'

/* 
public是资源文件夹
public/dist是打包后的文件，npm run test可查看资源引入路径
public/page是开发资源，npm run dev的资源引入路径

*/

const md5 = require('md5')
const dest = md5(+new Date).slice(0, 8)

module.exports = {
  img (url) {
    if (isDev) {
      return `<img src="/images/${url}"></img>`
    } else {
      return `/dist/images/${url}?version=${dest}` // 打包后生成的路径
    }
  },
  js (url) {
    if (isDev) {
      return `<script src="/page/${url}.js"></script>`
    } else {
      return `/dist/page/${url}.min.js?version=${dest}`
    }
  },
  css (url) {
    if (isDev) {
      return `<link rel="stylesheet" href="/page/${url}.css"></link>`
    } else {
      return `/dist/page/${url}.min.css?version=${dest}`
    }
  }
}