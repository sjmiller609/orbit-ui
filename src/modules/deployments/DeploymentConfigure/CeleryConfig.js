import React from 'react'
import PropTypes from 'prop-types'
// import s from './styles.scss'
import { NumberField, FormSubSection } from 'instruments'
import info from '../info'

import Resource from './Resource'

import {
  // workerSizeConvert,
  // workerSizeInfo,
  workerTerminationUnits,
  workerTerminationConvert,
} from './helpers'

// const workerSizes = [
//   {
//     icon: 'alien_ship',
//     value: 'small',
//     text: 'Small',
//     className: s.sizeS,
//   },
//   {
//     icon: 'alien_ship',
//     value: 'medium',
//     text: 'Medium',
//     className: s.sizeM,
//   },
//   {
//     icon: 'alien_ship',
//     value: 'large',
//     text: 'Large',
//     className: s.sizeL,
//   },
// ]

const CeleryConfig = ({
  form,
  deploymentConfig: { defaults, limits, presets, astroUnit },
}) => {
  return (
    <FormSubSection title="Celery Executor Config">
      <Resource
        label="Workers"
        field={form.field('config.workers.resources.limits')}
        defaultValue={defaults.workers.resources.requests}
        max={limits.workers.resources.limits}
        info={presets.workerSizes}
        required
        astroUnit={astroUnit}
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
    </FormSubSection>
  )
}

CeleryConfig.propTypes = {
  form: PropTypes.object,
  deploymentConfig: PropTypes.object,
}

export default CeleryConfig
