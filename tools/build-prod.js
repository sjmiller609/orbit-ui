import { chalkProcessing } from './chalkConfig'
import webpackBuildTrigger from './webpack-build'
import config from '../webpack.prod'

/*eslint-disable no-console*/
console.log(
  chalkProcessing(
    'Generating minified bundle for PRODUCTION. This will take a moment...'
  )
)

webpackBuildTrigger('production', config)
