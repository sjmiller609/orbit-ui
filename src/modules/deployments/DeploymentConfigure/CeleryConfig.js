import React from 'react'
import PropTypes from 'prop-types'
import s from './styles.scss'
import { NumberField, Select, FormSubSection, Mini } from 'instruments'
import info from '../info'

import {
  workerSizeConvert,
  workerTerminationUnits,
  workerTerminationConvert,
} from './helpers'

import Selector from './Selector'

const workerSizes = [
  {
    icon: 'alien_ship',
    value: 'small',
    text: 'Small',
    className: s.sizeS,
  },
  {
    icon: 'alien_ship',
    value: 'medium',
    text: 'Medium',
    className: s.sizeM,
  },
  {
    icon: 'alien_ship',
    value: 'large',
    text: 'Large',
    className: s.sizeL,
  },
]

const CeleryConfig = ({
  form,
  deploymentConfig: { defaults, limits, presets },
}) => {
  return (
    <FormSubSection title="Celery Executor Config">
      <Mini className={s.info}>
        Note: The Celery Executor requires at least 2 Astro Units.
      </Mini>
      <Select
        {...form.field('config.workers.resources')}
        label="Worker Size"
        className={s.selectors}
        defaultValue={presets.workerSizes.small}
        Component={Selector}
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
    </FormSubSection>
  )
}

CeleryConfig.propTypes = {
  form: PropTypes.object,
  deploymentConfig: PropTypes.object,
}

export default CeleryConfig
