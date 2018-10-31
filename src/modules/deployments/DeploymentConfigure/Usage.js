import React from 'react'
import PropTypes from 'prop-types'
import { Brownie, B, P, FormLabel } from 'instruments'
import s from './styles.scss'

import { convertCpu, convertMem } from './helpers'
import RTag from './Rtag'

const Usage = ({ extra = 0, config, deploymentConfig, executor }) => {
  if (!executor || !deploymentConfig.executors) return null

  let cpu = []
  let memory = []

  let usedCpu = 0
  let usedMemory = 0

  // const { cpu, airflowConns, actualConns, memory, pods, price } = deploymentConfig.astroUnit
  deploymentConfig.executors[executor].primaryComponents.forEach(name => {
    let resources = {}
    if (config && config[name]) {
      resources.cpu = config[name].resources.limits.cpu
      resources.memory = config[name].resources.limits.memory
    } else {
      // changed to use requests (instead of limits)
      resources.cpu = deploymentConfig.defaults[name].resources.requests.cpu
      resources.memory =
        deploymentConfig.defaults[name].resources.requests.memory
    }

    usedCpu += resources.cpu
    usedMemory += resources.memory

    cpu.push({
      name,
      value: resources.cpu,
    })
    memory.push({
      name,
      value: resources.memory,
    })
  })

  // calc total au's required
  const auCpu = Math.ceil(usedCpu / deploymentConfig.astroUnit.cpu)
  const auMem = Math.ceil(usedMemory / deploymentConfig.astroUnit.memory)
  const au = Math.max(auCpu, auMem) + extra

  const totalCpu = deploymentConfig.astroUnit.cpu * au
  const totalMemory = deploymentConfig.astroUnit.memory * au

  const price = deploymentConfig.astroUnit.price * au

  return (
    <React.Fragment>
      <Brownie
        title={
          <React.Fragment>
            CPU: <B>{(Math.round(totalCpu / 10) / 100).toString()}</B>
          </React.Fragment>
        }
        slices={cpu}
        total={totalCpu}
        part={usedCpu}
        convert={convertCpu}
        className={s.formElement}
      />
      <Brownie
        title={
          <React.Fragment>
            Memory: <B>{convertMem(totalMemory)}</B>
          </React.Fragment>
        }
        slices={memory}
        part={usedMemory}
        total={totalMemory}
        convert={convertMem}
        className={s.formElement}
      />
      <FormLabel className={s.formElement}>Cluster</FormLabel>
      <P className={s.resources}>
        <RTag n={Math.floor(deploymentConfig.astroUnit.pods * au)} l="pods" />
        <RTag
          n={Math.floor(deploymentConfig.astroUnit.airflowConns * au)}
          l="Airflow connections"
        />
        <RTag
          n={Math.floor(deploymentConfig.astroUnit.actualConns * au)}
          l="connections"
        />
        {price > 0 && (
          <FormLabel className={s.formElement}>
            Price: <B>${price} / Month</B>
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
