'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router'
import { Mutation as Apollo } from 'react-apollo'
import { SetUI, Track, CardError } from 'instruments'

const Mutation = ({
  gql,
  vars,
  children,
  onSuccess,
  setUI,
  update,
  redirect,
  back, // go up one level
  history,
  success,
  track,
  OnError,
  errorMsg,
  voidError,
}) => {
  return (
    <Apollo
      mutation={gql}
      variables={vars}
      errorPolicy="all"
      onError={() => {
        if (errorMsg) setUI.snackbar(errorMsg)
        return null
      }}
      onCompleted={data => {
        if (onSuccess) onSuccess(data[Object.keys(data)[0]])

        if (redirect) {
          // redirect can be a function, to go to the newly created object
          let path
          if (typeof redirect === 'function') {
            // get object from data and path from redirect function
            path = redirect(data[Object.keys(data)[0]])
          } else path = redirect

          // check if external url
          if (typeof path === 'string') {
            // check if relative URL
            if (path.charAt(0) !== '/') {
              if (path.slice(0, 3) !== 'http') path = 'http://' + path
              window.location = path
            } else history.push(path)
          } else history.push(path)
        } else if (back) {
          const path = history.location.pathname
          history.push(path.substring(0, path.lastIndexOf('/')))
        }
        if (success) {
          setUI.snackbar(
            typeof success === 'function' ? success(data) : success
          )
        }
        if (track) Track(track)
      }}
      update={update}>
      {(mutate, { loading, error }) => {
        setUI.loading = loading
        if (error && !errorMsg && !voidError) {
          if (OnError) return OnError
          return <CardError />
        }

        return children({ mutate, error }) || null
      }}
    </Apollo>
  )
}

Mutation.propTypes = {
  gql: PropTypes.object,
  children: PropTypes.func.isRequired,
  vars: PropTypes.object,
  //  query: PropTypes.object,
  onSuccess: PropTypes.func,
  update: PropTypes.func,
  setSnackbar: PropTypes.func,
  setUI: PropTypes.object,
  history: PropTypes.object,
  redirect: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  back: PropTypes.bool,
  success: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  track: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  OnError: PropTypes.element,
  errorMsg: PropTypes.string, // return original component and use snackbar message
  voidError: PropTypes.bool,
}
//export default Mutation
export default SetUI(withRouter(Mutation), { snackbar: true })
