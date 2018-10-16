/*eslint-disable import/extensions */
import text from './text'
import env from './envVars/named'
import reserved from './envVars/reserved'

export default {
  ...text,
  env,
  reserved,
}
