'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import api from './api'
import { handleError } from './helpers'

import { Create as Mutation, SetData } from 'instruments'

const Create = Component => {
  const Create = ({ login, setData, to, ...props }) => {
    let success
    let track
    let redirect
    if (login) {
      track = 'User Logged In With Email/Password'
    } else {
      success = data => {
        return data.token
          ? 'Success! Welcome to Astronomer'
          : "Success! You've created an Astronomer acccount"
      }
      track = 'User Signed Up With Email/Password'
      redirect = data => {
        if (!data.token) {
          const email = data.user.emails[0]
          if (!email.verified)
            return {
              pathname: '/confirm',
              state: {
                email: email.address,
              },
            }
        }
        if (to) return to
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
            login,
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
          const err = handleError(error)
          if (err) newProps.error = err

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
