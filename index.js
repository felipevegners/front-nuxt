const nuxtStart = require('./app/NuxtStart.js')

const PocNuxt = (
  server,
  apiClient,
  authServices,
  logger,
  config,
  featureToggleApi,
  loginServices,
  inkaServiceGateway
) => {
  const { app } = server

  const services = {
    apiClient,
    authServices,
    logger,
    config,
    featureToggleApi,
    loginServices,
    inkaServiceGateway,
  }

  nuxtStart(app, services)

  console.log('----> nuxt poc started! <----') // eslint-disable-line no-console
  return {}
}
module.exports = PocNuxt