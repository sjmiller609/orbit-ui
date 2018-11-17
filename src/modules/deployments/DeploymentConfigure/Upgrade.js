import React from 'react'
import PropTypes from 'prop-types'

import { CardConfirm, Link, B } from 'instruments'

import { default as Mutate } from '../Data/Upgrade'

const Upgrade = ({ deployment, deploymentConfig = {}, onSubmit }) => {
  return (
    <CardConfirm
      title="Upgrade Available!"
      text={
        <span>
          You are currently running Astronomer <B>v{deployment.version}</B>, and
          the latest version is <B>v{deploymentConfig.latestVersion}</B>. For
          more information on this upgrade{' '}
          <Link to="google.com" newTab>
            click here
          </Link>.
        </span>
      }
      buttonText="Upgrade"
      // Overriding id to work with menu component
      id="upgrade"
      confirm={{
        text: (
          <span>
            Upgrading may require some services to be rebooted, and could result
            in a very small amount of downtime. Your airflow image and data will
            remain untouched. Are you sure you want to upgrade deployment&nbsp;
            <B>{deployment.label}</B>
            ?
          </span>
        ),
      }}
      onSubmit={() => {
        onSubmit({
          id: deployment.id,
          version: deploymentConfig.latestVersion,
          queryVars: {
            workspaceId: deployment.workspace.id,
          },
        })
      }}
    />
  )
}

Upgrade.propTypes = {
  onSubmit: PropTypes.func,
  deployment: PropTypes.object,
  deploymentConfig: PropTypes.object,
}

export default Mutate(Upgrade)
