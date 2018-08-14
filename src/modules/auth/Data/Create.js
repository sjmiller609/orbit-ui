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
      success = data => {
        return data.token
          ? 'Success! Welcome to Astronomer'
          : "Success! You've created an Astronomer acccount."
      }
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
          if (error) {
            const err = JSON.stringify(error).toLowerCase()

            // incorrect password
            if (~err.indexOf('password incorrect')) {
              newProps.error = {
                name: 'password',
                error: 'Incorrect password',
              }

              // email taken
            } else if (~err.indexOf('email already in use')) {
              newProps.error = {
                name: 'email',
                error: 'That email is already taken.',
              }
              // oauth user tries to login with password
            } else if (~err.indexOf('no password credentials found')) {
              newProps.error = {
                name: 'email',
                error: 'No password found. Did you mean to login with OAuth?',
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
