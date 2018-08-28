'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router'
import { Mutation as Apollo } from 'react-apollo'
import { SetUI, Track, Loading, CardError } from 'instruments'

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
        console.log('err')
        if (errorMsg) setUI.snackbar(errorMsg)
      }}
      onCompleted={data => {
        console.log(track)
        console.log(success)
        const data2 = data[Object.keys(data)[0]]
        if (onSuccess) onSuccess(data2)

        if (redirect) {
          // redirect can be a function, to go to the newly created object
          let path
          if (typeof redirect === 'function') {
            // get object from data and path from redirect function
            path = redirect(data2)
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
            typeof success === 'function' ? success(data2) : success
          )
        }
        if (track) Track(track)
      }}
      update={update}>
      {(mutate, { loading, error }) => {
        if (error && !voidError) {
          if (OnError) return OnError
          return <CardError />
        }
        console.log('done')
        return (
          <React.Fragment>
            {loading && <Loading />}
            {children({ mutate, error }) || null}
          </React.Fragment>
        )
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
export default SetUI(withRouter(Mutation), { snackbar: true, loading: true })
