import React from 'react'
import PropTypes from 'prop-types'
import { FormSection } from 'instruments'
// import info from '../info'
import CeleryConfig from './CeleryConfig'

const Executor = ({ form, deploymentConfig }) => {
  return (
    <FormSection id="executor" title="Executor">
      <CeleryConfig form={form} deploymentConfig={deploymentConfig} />
    </FormSection>
  )
}

Executor.propTypes = {
  form: PropTypes.object,
  deploymentConfig: PropTypes.object,
}

export default Executor
