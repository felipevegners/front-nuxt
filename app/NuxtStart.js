const { Nuxt, Builder } = require('nuxt')
const isProd = (process.env.NODE_ENV === 'production')

// We instantiate Nuxt.js with the options
const nuxtConfig = require('../nuxt.config.js')
nuxtConfig.dev = !isProd
const nuxt = new Nuxt(nuxtConfig)

const nuxtReady = async (app) => {
    // Render every route with Nuxt.js
  app.use(nuxt.render)

  await nuxt.ready()

  // Build only in dev mode with hot-reloading
  if ( nuxtConfig.dev ) {
    new Builder(nuxt).build()
  }
}

module.exports = (
  app,
  {
    apiClient,
    authServices,
    logger,
    config,
    featureToggleApi,
    loginServices,
    inkaServiceGateway,
  }
) => {
  nuxtReady(app)
}