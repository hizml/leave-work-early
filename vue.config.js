module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  css: {
    sourceMap: true
  },
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({ /* options */ }),
    ],
  }
}
