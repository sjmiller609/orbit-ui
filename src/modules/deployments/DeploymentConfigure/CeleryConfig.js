import React from 'react'
import PropTypes from 'prop-types'
import s from './styles.scss'
import { NumberField, Select } from 'instruments'
import info from '../info'

import {
  workerSizeConvert,
  workerTerminationUnits,
  workerTerminationConvert,
} from './helpers'

import { default as WorkerSize, workerSizes } from './WorkerSize'
const CeleryConfig = ({
  form,
  deploymentConfig: { defaults, limits, presets },
}) => {
  return (
    <React.Fragment>
      <Select
        {...form.field('config.workers.resources')}
        label="Worker Size"
        className={s.workers}
        defaultValue={presets.workerSizes.small}
        Component={WorkerSize}
        options={workerSizes}
        info={info.workerSize}
        convert={(size, out) =>
          workerSizeConvert(size, out, presets.workerSizes)
        }
      />
      <NumberField
        label="Worker Count"
        {...form.field('config.workers.replicas')}
        slider
        defaultValue={defaults.workers.replicas}
        min={1}
        max={limits.workers.replicas}
        info={info.workerCount}
      />
      <NumberField
        label="Worker Termination Grace Period"
        {...form.field('config.workers.terminationGracePeriodSeconds')}
        slider
        units={workerTerminationUnits}
        defaultValue={defaults.workers.terminationGracePeriodSeconds}
        min={5 * 60}
        max={limits.workers.terminationGracePeriodSeconds}
        step={5 * 60}
        convert={workerTerminationConvert}
        info={info.workerTermination}
      />
    </React.Fragment>
  )
}

CeleryConfig.propTypes = {
  form: PropTypes.object,
  deploymentConfig: PropTypes.object,
}

export default CeleryConfig
