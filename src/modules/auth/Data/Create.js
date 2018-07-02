'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import api from './api'

import { Create as Mutation, SetData } from 'instruments'

const Create = Component => {
  const Create = ({ setData, to, track, success, ...props }) => {
    return (
      <Mutation
        gql={api.CreateToken}
        redirect={to}
        success={success}
        track={track}>
        {({ mutate }) => {
          const newProps = {
            ...props,
            onSubmit: vars => {
              let authStrategy
              if (vars.service === 'google') authStrategy = 'GOOGLE_OAUTH'

              mutate({
                variables: {
                  duration: 7, // set to max days
                  authStrategy,
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
    setData: PropTypes.object,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    track: PropTypes.string,
    success: PropTypes.string,
  }

  return SetData(Create, { userId: true })
}

export default Create
