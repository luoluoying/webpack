const path = require('path')
const MyPlugin = require('./src/MyPlugin.js')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/', // 异步时候指定了资源文件的公共资源路径
  },
  plugins: [
    new MyPlugin()
  ]
}