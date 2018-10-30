import React from 'react'
import PropTypes from 'prop-types'
import { FormSection, Brownie, B, FormLabel } from 'instruments'
import s from './styles.scss'

import { convertCpu, convertMem } from './helpers'

const Usage = ({ extra, config, deploymentConfig, executor, info }) => {
  console.log(config)
  if (!executor || !deploymentConfig.executors) return null

  let cpu = []
  let memory = []

  let usedCpu = 0
  let usedMemory = 0

  // const { cpu, airflowConns, actualConns, memory, pods, price } = deploymentConfig.astroUnit
  deploymentConfig.executors[executor].primaryComponents.forEach(name => {
    const c = deploymentConfig.defaults[name]
    if (!c) return

    usedCpu += c.resources.requests.cpu
    usedMemory += c.resources.requests.memory

    cpu.push({
      name,
      value: c.resources.requests.cpu,
    })
    memory.push({
      name,
      value: c.resources.requests.memory,
    })
  })

  // calc total au's required
  const auCpu = Math.ceil(usedCpu / deploymentConfig.astroUnit.cpu)
  const auMem = Math.ceil(usedMemory / deploymentConfig.astroUnit.memory)
  const au = Math.max(auCpu, auMem)

  const totalCpu = deploymentConfig.astroUnit.cpu * au
  const totalMemory = deploymentConfig.astroUnit.memory * au

  const price = deploymentConfig.astroUnit.price * au

  return (
    <FormSection id="resources" title="Resources" text={info}>
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
      {price > 0 && (
        <FormLabel className={s.formElement}>
          Price: <B>${price} / Month</B>
        </FormLabel>
      )}
    </FormSection>
  )
}

Usage.propTypes = {
  deploymentConfig: PropTypes.object,
  config: PropTypes.object,
  extra: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  executor: PropTypes.string,
  info: PropTypes.string,
}

export default Usage
