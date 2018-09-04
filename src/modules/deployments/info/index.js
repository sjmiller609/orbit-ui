/*eslint-disable import/extensions */
import workers from './workers'
import env from './envVars/named'
// import './envVars/generate'

export default {
  ...workers,
  env,
}
