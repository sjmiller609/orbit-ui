'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import api from './api'

import { Mutation, Redirect, SetData } from 'instruments'

const Verify = Component => {
  const Verify = ({ setData, ...props }) => {
    return (
      <Mutation
        gql={api.VerifyEmail}
        success="Email successfuly verified"
        errorMsg="Your confirmation token is not valid"
        OnError={<Redirect to="/" />}
        onSuccess={data => {
          console.log(data)
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
        track="User Verfies Email">
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
  Verify.propTypes = {
    setData: PropTypes.object,
  }

  return SetData(Verify, { auth: true })
}

export default Verify
