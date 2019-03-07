'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import api from './api'

import { Mutation, SetData, Redirect } from 'instruments'

const ResetPw = Component => {
  const ResetPw = ({ setData, ...props }) => {
    return (
      <Mutation
        gql={api.ResetPassword}
        success="Your password is reset"
        track="User Resets Password"
        errorMsg="Your reset password token is not valid. Try another"
        OnError={<Redirect to="/forgot-password" />}
        onSuccess={data => {
          if (!data) return
          if (data.token) {
            const { value } = data.token
            // pass token to context
            setData.auth({
              token: value,
            })
          }
        }}>
        {({ mutate }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              mutate({
                variables: vars,
              })
            },
          }
          return <Component {...newProps} />
        }}
      </Mutation>
    )
  }
  ResetPw.propTypes = {
    setData: PropTypes.object,
  }

  return SetData(ResetPw, { auth: true })
}

export default ResetPw
