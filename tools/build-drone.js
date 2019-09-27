import { chalkProcessing } from './chalkConfig'
import webpackBuildTrigger from './webpack-build'
import config from '../webpack.drone'

/*eslint-disable no-console*/
console.log(
  chalkProcessing(
    'Generating minified bundle for CI CONTAINER. This will take a moment...'
  )
)

webpackBuildTrigger('production', config)
