'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router'
import { Mutation as Apollo } from 'react-apollo'
import { Loading, SetUI, Track, CardError } from 'instruments'

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
}) => {
  return (
    <Apollo
      mutation={gql}
      variables={vars}
      errorPolicy="all"
      onError={() => null}
      onCompleted={data => {
        if (onSuccess) onSuccess()

        if (redirect) {
          // redirect can be a function, to go to the newly created object
          let path
          if (typeof redirect === 'function') {
            // get object from data and path from redirect function
            path = redirect(data[Object.keys(data)[0]])
          } else path = redirect

          history.push(path)
        } else if (back) {
          const path = history.location.pathname
          history.push(path.substring(0, path.lastIndexOf('/')))
        }
        setUI.snackbar(success || 'Success!')
        if (track) Track(track)
      }}
      update={update}>
      {(mutate, { loading, error }) => {
        if (loading) return <Loading />
        if (error) return <CardError />

        return children({ mutate }) || null
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
  success: PropTypes.string,
  track: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}
//export default Mutation
export default SetUI(withRouter(Mutation), { snackbar: true })
