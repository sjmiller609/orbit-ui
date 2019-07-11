const dev = process.env.NODE_ENV !== 'production'

const log = (call, params) => {
  console.log(call.toUpperCase() + ': ' + JSON.stringify(params)) // eslint-disable-line no-console
}

const logger = {
  page: params => log('page', params),
  group: params => log('group', params),
  identify: params => log('identify', params),
  track: params => log('track', params),
}

const analytics =
  dev || typeof window.analytics === 'undefined' ? logger : window.analytics

export default analytics
