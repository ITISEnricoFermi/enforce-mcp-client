// vue.config.js
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  devServer: {
  // https : true,
    proxy: {
      '/missions': {
        target: {
          protocol: 'http:',
          host: 'localhost',
          port: 3000
        },
        changeOrigin: true,
        logLevel: 'debug'
      }
    }
  },
  configureWebpack: {
    plugins: [
      new CompressionWebpackPlugin()
    ]
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/scss/main.scss";`
      }
    }
  },
  pwa: {
    name: 'Enforce MCP',
    themeColor: '#151A22',
    msTileColor: '#151A22',
    appleMobileWebAppStatusBarStyle: 'black-translucent'
  }
}
