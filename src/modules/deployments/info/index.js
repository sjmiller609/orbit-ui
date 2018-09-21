/*eslint-disable import/extensions */
import workers from './workers'
import env from './envVars/named'
import reserved from './envVars/reserved'

export default {
  ...workers,
  env,
  reserved,
}
