'use strict'
import React from 'react'
import api from './api'

import { Upgrade as Mutate } from 'instruments'

const Upgrade = Component => {
  const Upgrade = props => {
    const query = {
      name: api.Deployments,
      type: 'deployments',
    }
    return (
      <Mutate
        gql={api.UpgradeDeployment}
        redirect="/deployments"
        success="Deployment upgraded successfully."
        track="Deployment Upgraded"
        query={query}>
        {({ mutate }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: vars,
                refetchQueries: [
                  {
                    query: query.name,
                    variables: vars.queryVars, // need to get workspaceId for deployments query
                  },
                ],
              })
            },
          }
          return <Component {...newProps} />
        }}
      </Mutate>
    )
  }

  return Upgrade
}

export default Upgrade
