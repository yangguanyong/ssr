const fs = require('fs');
const uaParser = require('ua-parser-js');
const util_view = require('../util/view-util') 
module.exports = {
  readdir (dirname) {
    return new Promise(function(resolve, reject) {
      fs.readdir(dirname, function(err, data) {
        if (err) {
          console.warn('router: dir con not read');
          reject(err);
        };
        resolve(data);
      });
    });
  },
  getRenderLocals (route, path, opt) {
    const agent = uaParser(route.req.headers['user-agent']);
    const device = agent.device.type;
    const isMobile = (device == 'mobile' || /android/i.exec(agent.os.name))
    let innerPath = path
    if (isMobile && opt.tid == 'M') {
      innerPath += opt.tid
    }
    opt.vt = util_view // 工具类
    return {
      path: innerPath,
      option: {
        vm: opt.vm,
        title: opt.tdk[0] || '',
        vt: opt.vt,
        tid: opt.tid
      }
    }
  }
}