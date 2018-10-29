import React from 'react'
import PropTypes from 'prop-types'
import { FormSection, Brownie, B } from 'instruments'

const convertCpu = v => (Math.round(v / 10) / 100).toString() + ' CPU'
const convertMem = v =>
  v < 1024
    ? v.toString() + ' MB'
    : (Math.round(v / 10.24) / 100).toString() + ' GB'

const Usage = ({ deploymentConfig, executor }) => {
  if (!executor) return null

  let cpu = []
  let memory = []

  let usedCpu = 0
  let usedMemory = 0

  // const { cpu, airflowConns, actualConns, memory, pods, price } = deploymentConfig.astroUnit
  deploymentConfig.executors[executor].primaryComponents.forEach(name => {
    const c = deploymentConfig.defaults[name]
    if (!c) return

    usedCpu += c.resources.limits.cpu
    usedMemory += c.resources.limits.memory

    cpu.push({
      name,
      value: c.resources.limits.cpu,
    })
    memory.push({
      name,
      value: c.resources.limits.memory,
    })
  })

  // calc total au's required
  const auCpu = Math.ceil(usedCpu / deploymentConfig.astroUnit.cpu)
  const auMem = Math.ceil(usedMemory / deploymentConfig.astroUnit.memory)
  const au = Math.max(auCpu, auMem)

  const totalCpu = deploymentConfig.astroUnit.cpu * au
  const totalMemory = deploymentConfig.astroUnit.memory * au

  return (
    <FormSection id="usage" title="Resources" text="instructions...">
      <Brownie
        title={
          <React.Fragment>
            CPU: <B>{(Math.round(usedCpu / 10) / 100).toString()}</B>
          </React.Fragment>
        }
        slices={cpu}
        total={totalCpu}
        part={usedCpu}
        convert={convertCpu}
      />
      <Brownie
        title={
          <React.Fragment>
            Memory: <B>{convertMem(usedMemory)}</B>
          </React.Fragment>
        }
        slices={memory}
        part={usedMemory}
        total={totalMemory}
        convert={convertMem}
      />
    </FormSection>
  )
}

Usage.propTypes = {
  deploymentConfig: PropTypes.object,
  executor: PropTypes.string,
}

export default Usage
