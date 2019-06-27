import React from 'react'
import PropTypes from 'prop-types'
import { NumberField, FormSubSection } from 'instruments'
import info from '../info'
import { isTrialing } from 'helpers/trial'

import Resource from './Resource'

import { workerTerminationUnits, workerTerminationConvert } from './helpers'

const CeleryConfig = ({
  form,
  deploymentConfig: { defaults, limits, astroUnit },
  deployment,
}) => {
  const disabled = isTrialing(deployment.workspace)
  return (
    <FormSubSection title="Celery Executor Config">
      <Resource
        label="Workers"
        field={form.field('config.workers.resources.limits')}
        defaultValue={defaults.workers.resources.requests}
        max={limits.workers.resources.limits}
        info={info.workerSize}
        required
        astroUnit={astroUnit}
        deployment={deployment}
      />
      <NumberField
        label="Worker Count"
        {...form.field('config.workers.replicas')}
        slider
        defaultValue={defaults.workers.replicas}
        min={1}
        max={limits.workers.replicas}
        info={info.workerCount}
        disabled={disabled}
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
        disabled={disabled}
      />
    </FormSubSection>
  )
}

CeleryConfig.propTypes = {
  form: PropTypes.object,
  deploymentConfig: PropTypes.object,
  deployment: PropTypes.object,
}

export default CeleryConfig
