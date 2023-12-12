const CompressionWebpackPlugin = require('compression-webpack-plugin');

const productionGzipExtensions = ['js', 'css']

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:'/',
  outputDir:'dist',
  assetsDir:'assets',
  productionSourceMap:false,
  lintOnSave:true,
  transpileDependencies: true,
  configureWebpack:{
    plugins:[
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets:false,
      })
    ],
    devtool:'source-map'
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/_colors.scss";`
      }
    }
  }
})
