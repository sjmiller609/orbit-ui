import React from 'react'
import PropTypes from 'prop-types'

import { CardDelete, Link, P, B } from 'instruments'

import { default as Mutate } from '../Data/Delete'
import Data from 'modules/deployments/Data'

// Get Deployments and disable delete if any exist

const Delete = ({ workspace, deployments, onSubmit }) => {
  const nDeployments = deployments.length
  return (
    <CardDelete
      title="Delete Workspace"
      text="Warning! This cannot be undone. Your workspace and all its existing data will be deleted."
      confirm={{
        text: (
          <span>
            Are you sure you want to delete&nbsp;
            <B>{workspace.label}</B>?
          </span>
        ),
      }}
      disabled={nDeployments > 0}
      onSubmit={() => {
        onSubmit({ id: workspace.id })
      }}>
      {nDeployments > 0 ? (
        <React.Fragment>
          <P>
            Your workspace has {nDeployments} active deployment
            {nDeployments > 1 ? 's' : ''}:{' '}
            {deployments.map((d, i) => (
              <React.Fragment key={d.id}>
                <Link
                  to={`/workspsaces/${d.workspace.id}/deployments/${
                    d.releaseName
                  }/configure`}>
                  {d.label}
                </Link>
                {i + 1 < deployments.length ? ', ' : ''}
              </React.Fragment>
            ))}
          </P>
          <P>
            You must first deprovision all deployments before you can delete
            your workspace.
          </P>
        </React.Fragment>
      ) : null}
    </CardDelete>
  )
}

Delete.propTypes = {
  onSubmit: PropTypes.func,
  workspace: PropTypes.object,
  deployments: PropTypes.array,
}

export default Data(Mutate(Delete))
