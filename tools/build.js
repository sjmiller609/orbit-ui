import { chalkProcessing } from './chalkConfig'
import webpackBuildTrigger from './webpack-build'
import config from '../webpack.config.localProd'

/*eslint-disable no-console*/
console.log(
  chalkProcessing(
    'Generating minified bundle for STAGING. This will take a moment...'
  )
)

webpackBuildTrigger('production', config)
