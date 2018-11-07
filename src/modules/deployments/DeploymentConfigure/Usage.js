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

  const au = deploymentConfig.executors[executor].components.reduce(
    (au1, name) => {
      let resources = {}
      const c =
        config && config[name] ? config[name] : deploymentConfig.defaults[name]

      // Default to 1 replica
      const replicas = c.replicas || 1

      resources.cpu = parseInt(c.resources.limits.cpu * replicas)
      resources.memory = parseInt(c.resources.limits.memory * replicas)

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

  const totalAU = au + extra

  return (
    <React.Fragment>
      <Brownie
        title="Cluster"
        slices={slices}
        total={totalAU}
        part={au}
        convert={v => convertAU(v, deploymentConfig.astroUnit)}
        className={s.formElement}
      />

      <P className={s.resources}>
        <RTag n={convertCpu(cpu * totalAU, false)} l="CPU" />
        <RTag
          n={convertMem(memory * totalAU, false)}
          l={(memory * totalAU < 1024 ? 'MB' : 'GB') + ' memory'}
        />
        <RTag n={Math.floor(slices.length + pods * extra)} l="pods" />
        <RTag n={Math.floor(airflowConns * totalAU)} l="Airflow connections" />
        <RTag n={Math.floor(actualConns * totalAU)} l="connections" />
        {price > 0 && (
          <FormLabel className={s.formElement}>
            Price: <B>${price * totalAU} / Month</B>
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
