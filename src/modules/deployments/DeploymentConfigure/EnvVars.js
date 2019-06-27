import React from 'react'
import PropTypes from 'prop-types'
import s from './styles.scss'
import { FormSection, FieldSet, TextFieldSelect, KeyValue } from 'instruments'
import info from '../info'
import { isTrialing } from 'helpers/trial'

import { validateEnvVar } from './helpers'

const vars = Object.keys(info.env)

const EnvVar = ({ name }) => {
  const n = name.split('__')
  const name2 = n.pop()
  const group = <span className={s.group}>{n.pop()}</span>
  return (
    <span>
      {group}
      {name2}
    </span>
  )
}

EnvVar.propTypes = {
  name: PropTypes.string,
}

const EnvVars = ({ form, deployment }) => {
  const env = form.field('env')
  const disabled = isTrialing(deployment.workspace.stripeCustomerId)
  return (
    <FormSection id="env" title="Environment Variables">
      <FieldSet
        {...env}
        title="Env Variable"
        formField={form.field}
        FieldType={KeyValue}
        fieldProps={{
          KeyField: TextFieldSelect,
          keyProps: {
            Option: EnvVar,
            options: vars,
            className: s.envKey,
            validate: value => validateEnvVar(value, env.value),
            disabled: disabled,
          },
          valueProps: {
            disabled: disabled,
          },
        }}
      />
    </FormSection>
  )
}

EnvVars.propTypes = {
  form: PropTypes.object,
  deployment: PropTypes.object,
}

export default EnvVars
