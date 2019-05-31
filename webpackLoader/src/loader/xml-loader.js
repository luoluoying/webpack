const xml2js = require('xml2js')
const parser = new xml2js.Parser()

module.exports = function(source) {
  this.cacheable && this.cacheable()
  const self = this
  parser.parseString(source, function(err, result) {
    self.callback(err, !err && "module.exports = " + JSON.stringify(result))
  })
}

1
// 1、获取loader option 获取使用require('loader-utils')  getOptions
/**
 * 2、加载本地loader 
 * ①加载本地 path.resolve('../../loder.js)
 * ②ResolveLoader  配置webpack 如何寻找loader， 默认情况只会去node_modules目录下寻找
 * resolveLoader: {
    modules: [path.join(__dirname, '/src/loader')]
  },
  3、缓存加速
 */