'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import api from './api'

import { Create as Mutation, SetData } from 'instruments'

const Login = Component => {
  const Login = ({ setData, to, track, success, ...props }) => {
    // update self query
    // const query = {
    //   name: api.Deployments,
    //   type: 'deployments',
    //   vars: {
    //     workspaceId: getData.workspaceId,
    //   },
    // }
    return (
      <Mutation
        gql={api.Signup}
        onSuccess={data => {
          if (!data) return
          const { value, payload } = data.token
          // pass token to context
          setData.auth({
            token: value,
            exp: payload.exp,
          })
        }}
        redirect={to}
        success={success}
        track={track}>
        {({ mutate }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: {
                  duration: 7, // set to max days
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
  Login.propTypes = {
    setData: PropTypes.object,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    track: PropTypes.string,
    success: PropTypes.string,
  }

  return SetData(Login, { auth: true })
}

export default Login
