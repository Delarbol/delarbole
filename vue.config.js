module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/delarbole/'
    : '/'
}

// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   publicPath: './'
// })
