import React from 'react'
import PropTypes from 'prop-types'
import { Brownie, B, P, FormLabel } from 'instruments'
import s from './styles.scss'

import { convertCpu, convertMem, calcAU } from './helpers'
import RTag from './RTag'

const convertAU = (au, scale) =>
  convertCpu(au * scale.cpu) + ', ' + convertMem(au * scale.memory)

const Usage = ({ extra = 0, config, deploymentConfig, executor }) => {
  if (!executor || !deploymentConfig.executors) return null
  let slices = []

  const au = deploymentConfig.executors[executor].primaryComponents.reduce(
    (au1, name) => {
      let resources = {}
      const c =
        config && config[name] ? config[name] : deploymentConfig.defaults[name]
      resources.cpu = parseInt(c.resources.limits.cpu)
      resources.memory = parseInt(c.resources.limits.memory)

      // mulitply by replicas
      if (c.replicas) {
        resources.cpu = resources.cpu * c.replicas
        resources.memory = resources.memory * c.replicas
      }

      const au2 = calcAU(resources, deploymentConfig.astroUnit)
      slices.push({
        name,
        value: au2,
      })
      return au1 + au2
    },
    0
  )

  const {
    cpu,
    airflowConns,
    actualConns,
    memory,
    pods,
    price,
  } = deploymentConfig.astroUnit

  return (
    <React.Fragment>
      <Brownie
        title="Cluster"
        slices={slices}
        total={au + extra}
        part={au}
        convert={v => convertAU(v, deploymentConfig.astroUnit)}
        className={s.formElement}
      />

      <P className={s.resources}>
        <RTag n={convertCpu(cpu * au, false)} l="CPU" />
        <RTag
          n={convertMem(memory * au, false)}
          l={(memory * au < 1024 ? 'MB' : 'GB') + ' memory'}
        />
        <RTag n={Math.floor(pods * au)} l="pods" />
        <RTag n={Math.floor(airflowConns * au)} l="Airflow connections" />
        <RTag n={Math.floor(actualConns * au)} l="connections" />
        {price > 0 && (
          <FormLabel className={s.formElement}>
            Price: <B>${price * au} / Month</B>
          </FormLabel>
        )}
      </P>
    </React.Fragment>
  )
}

Usage.propTypes = {
  deploymentConfig: PropTypes.object,
  config: PropTypes.object,
  extra: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  executor: PropTypes.string,
}

Usage.defaultProps = {
  config: {},
}

export default Usage
