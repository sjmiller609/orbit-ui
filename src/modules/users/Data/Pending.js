'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import api from './api'

import { Query, GetData } from 'instruments'

const Data = Component => {
  const Data = ({ vars, skip, search, getData, ...otherProps }) => {
    let vars2 = {
      ...vars,
      workspaceId: getData.workspaceId,
    }

    if (otherProps.admin) {
      vars2 = {
        ...vars,
      }
    }

    return (
      <Query gql={api.Invites} vars={vars2} skip={skip} search={search}>
        {({ data: { workspaceInvites } }) => {
          const newProps = {
            ...otherProps,
            search,
            users: workspaceInvites,
          }
          return <Component {...newProps} />
        }}
      </Query>
    )
  }

  Data.propTypes = {
    vars: PropTypes.object,
    skip: PropTypes.bool,
    search: PropTypes.object,
    getData: PropTypes.object,
  }

  return GetData(Data, { workspaceId: true })
}

export default Data
