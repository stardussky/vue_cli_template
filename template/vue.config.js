const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const path = require('path')

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    overlay: {
      warnings: true,
      errors: true
    },
    disableHostCheck: true
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: ['./src/style/_main.scss']
        })
        .end()
    })
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return
    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: ['/'],
          renderer: new Renderer({
            renderAfterDocumentEvent: 'render-event'
          }),
          postProcess (renderedRoute) {
            // renderedRoute.html = renderedRoute.html
            //   .replace(new RegExp('="/js/', 'g'), '="./js/')
            //   .replace(new RegExp('="/css/', 'g'), '="./css/')
            //   .replace(new RegExp('/img/', 'g'), './img/')
            //   .replace(new RegExp('/favicon.ico', 'g'), './favicon.ico')
            // if (renderedRoute.route.endsWith('.html')) {
            //   renderedRoute.outputPath = path.join(
            //     __dirname,
            //     'dist',
            //     renderedRoute.route
            //   )
            // }
            return renderedRoute
          }
        })
      ]
    }
  }
}
