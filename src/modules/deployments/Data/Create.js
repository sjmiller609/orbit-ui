'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import api from './api'

import { Create as Mutation, GetData } from '../../../instruments'

const Create = Component => {
  const Create = ({ getData, ...props }) => {
    const query = {
      name: api.Deployments,
      type: 'deployments',
      vars: {
        teamId: getData.teamId,
      },
    }
    return (
      <Mutation
        gql={api.CreateDeployment}
        redirect={data => '/deployments/' + data.releaseName}
        success="New deployment created successfully."
        track="New Deployment Created"
        query={query}>
        {({ mutate }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: {
                  type: 'airflow',
                  teamId: getData.teamId,
                  ...vars,
                },
              })
            },
          }
          return <Component {...newProps} />
        }}
      </Mutation>
    )
  }
  Create.propTypes = {
    getData: PropTypes.object,
  }

  return GetData(Create, { teamId: true })
}

export default Create
