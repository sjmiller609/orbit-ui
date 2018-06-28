import React from 'react'
import PropTypes from 'prop-types'

import { CardDelete, Link, P, B } from 'instruments'

import { default as Mutate } from '../Data/Delete'
import Data from 'modules/deployments/Data'

// Get Deployments and disable delete if any exist

const Delete = ({ team, deployments, onSubmit }) => {
  const nDeployments = deployments.length
  return (
    <CardDelete
      title="Delete Team"
      text="Warning! This cannot be undone. Your team and all its existing data will be deleted."
      confirm={{
        text: (
          <span>
            Are you sure you want to delete&nbsp;
            <B>{team.label}</B>
            ?
          </span>
        ),
      }}
      disabled={!!nDeployments}
      onSubmit={() => {
        onSubmit({ id: team.id })
      }}>
      {nDeployments ? (
        <React.Fragment>
          <P>
            Your team has {nDeployments} active deployment
            {nDeployments > 1 ? 's' : ''}:{' '}
            {deployments.map((d, i) => (
              <React.Fragment key={d.id}>
                <Link to={`/deployments/${d.releaseName}/configure`}>
                  {d.label}
                </Link>
                {i + 1 < deployments.length ? ', ' : ''}
              </React.Fragment>
            ))}
          </P>
          <P>
            You must first deprovision all deployments before you can delete
            your team.
          </P>
        </React.Fragment>
      ) : null}
    </CardDelete>
  )
}

Delete.propTypes = {
  onSubmit: PropTypes.func,
  team: PropTypes.object,
  deployments: PropTypes.array,
}

export default Data(Mutate(Delete))
