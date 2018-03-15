const Raven = window.Raven
// Must always be configged to NOT log anything personally identifiable!
// dynamic depending on ENV
const REACT_ENV = process.env.REACT_APP_ENV || 'development'
const version = `${process.env.REACT_APP_VERSION || '0.0.0'}-${REACT_ENV}`

const EXCLUDES = ['Local storage is missing', 'Retrying']

try {
  Raven.config('https://67258c1618d14fbd99e9811bc8003798@sentry.io/282513', {
    environment: process.env.REACT_APP_ENV || 'production',
    release: version,
    autoBreadcrumbs: false,
    ignoreErrors: EXCLUDES,
  }).install()
  console.info('Raven configured.')
} catch (e) {
  // eslint-disable-next-line no-console
  console.warn('Unable to configure Raven, aborting.')
}

export function captureException(e) {
  try {
    if (Raven.isSetup()) {
      try {
        if (e.meta) {
          let tags = undefined
          if (e.meta.action) {
            tags = { action: e.meta.action }
          }
          // also route to bugsnag!
          Raven.captureException(e, {
            extra: e.meta,
            tags,
          })
        } else {
          // also route to bugsnag!
          Raven.captureException(e)
        }
      } catch (e) {
        // eslint-disable-next-line
        console.warn('Unable to transmit error -- ignoring and continuing.')
      }
    } else {
      // eslint-disable-next-line
      console.warn('Not ready to log, ignoring.')
    }
  } catch (e) {
    // prevent any calls to Raven from crashing the whole app
  }
}

export function captureMessage(
  message,
  level = RAVEN_MESSAGE_TYPES.info,
  extra
) {
  try {
    let options = { level }
    if (extra) {
      options = { ...options, ...extra }
    }

    Raven.captureMessage(message, options)
  } catch (e) {
    // ignore errors
  }
}

export const RAVEN_MESSAGE_TYPES = {
  info: 'info',
  warning: 'warning',
  error: 'error',
}
