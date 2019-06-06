'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import api from './api'

import { Create as Mutation, GetData, CardError } from 'instruments'
import { handleError, trimError } from './helpers'
import Self from '../../self/Data'

const Create = Component => {
  const Create = ({ getData, ...props }) => {
    const query = {
      name: api.Deployments,
      type: 'deployments',
      vars: {
        workspaceId: getData.workspaceId,
      },
    }
    const email = props.self.user.emails[0].address
    const workspace = props.workspaces[0]
    return (
      <Mutation
        gql={api.CreateDeployment}
        redirect={data => '/deployments/' + data.releaseName + '?loading'}
        success="New deployment created successfully."
        track={{
          name: 'New Deployment Created',
          props: {
            email,
            workspace,
          },
        }}
        errorMsg={trimError}
        query={query}>
        {({ mutate, error }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: {
                  type: 'airflow',
                  workspaceId: getData.workspaceId,
                  ...vars,
                },
              })
            },
          }
          // handle api errors
          const err = handleError(error)
          if (err) newProps.error = err
          else if (error) return <CardError />
          return <Component {...newProps} />
        }}
      </Mutation>
    )
  }
  Create.propTypes = {
    getData: PropTypes.object,
  }

  return Self(GetData(Create, { workspaceId: true }))
}

export default Create
