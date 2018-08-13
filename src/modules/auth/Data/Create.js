'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import api from './api'

import { Create as Mutation, SetData } from 'instruments'

const Create = Component => {
  const Create = ({ login, setData, ...props }) => {
    let success
    let track
    let redirect
    if (login) {
      track = 'User Logged In With Email/Password'
    } else {
      success = 'Success! ...'
      track = 'User Signed Up With Email/Password'
      redirect = data => {
        if (!data.token) return '/confirm'
      }
    }
    return (
      <Mutation
        gql={login ? api.Login : api.Signup}
        onSuccess={data => {
          if (!data) return
          if (data.token) {
            const { value, payload } = data.token
            // pass token to context
            setData.auth({
              token: value,
              exp: payload.exp,
            })
          }
        }}
        redirect={redirect}
        voidError
        success={success}
        track={track}>
        {({ mutate, error }) => {
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
          // handle api errors
          if (error) {
            const err = error.message.toLowerCase()
            // signup error
            if (err.indexOf('email already in use')) {
              newProps.error = {
                name: 'email',
                error: 'That email is already taken.',
              }
            }
          }
          return <Component {...newProps} />
        }}
      </Mutation>
    )
  }
  Create.propTypes = {
    login: PropTypes.bool,
    setData: PropTypes.object,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    track: PropTypes.string,
    success: PropTypes.string,
  }

  return SetData(Create, { auth: true })
}

export default Create
