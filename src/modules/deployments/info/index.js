import workers from './workers'
import env from './envVars/named'
// import './envVars'

export default {
  ...workers,
  env,
}
