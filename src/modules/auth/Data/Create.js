'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import api from './api'
import { handleError } from './helpers'

import { Create as Mutation, SetData, CardError, Identify } from 'instruments'

const Create = Component => {
  const Create = ({ login, vars, setData, to, ...props }) => {
    let success
    let track
    let identify
    let redirect
    if (login) {
      track = 'User Logged In With Email/Password'
    } else {
      success = data => {
        identify = data.user.emails[0]
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
            const { value } = data.token
            // pass token to context
            setData.auth({
              token: value,
            })
          }
          Identify(data.user.id, { email: data.user.username })
        }}
        redirect={redirect}
        voidError
        success={success}
        track={track}
        identify={identify}>
        {({ mutate, error }) => {
          const newProps = {
            ...props,
            login,
            onSubmit: variables => {
              mutate({
                variables: {
                  duration: 7, // set to max days
                  ...variables,
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
    login: PropTypes.bool,
    vars: PropTypes.object,
    setData: PropTypes.object,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    track: PropTypes.string,
    success: PropTypes.string,
  }

  return SetData(Create, { auth: true })
}

export default Create
