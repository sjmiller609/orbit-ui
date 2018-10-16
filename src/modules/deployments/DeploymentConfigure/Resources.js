import React from 'react'
import PropTypes from 'prop-types'
import { FormSection, NumberField, P } from 'instruments'
import info from '../info'

const Resources = ({ form, astroUnit }) => {
  return (
    <FormSection id="resources" title="Resource Quotas">
      <NumberField
        label="Resources"
        {...form.field('config.resources')}
        slider
        defaultValue={1}
        min={1}
        max={10}
        info={info.resources}
      />
      <P>{astroUnit.cpu.toString()}</P>
    </FormSection>
  )
}

Resources.propTypes = {
  form: PropTypes.object,
  astroUnit: PropTypes.object,
}

export default Resources
