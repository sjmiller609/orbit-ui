'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router'
import { Mutation as Apollo } from 'react-apollo'
import { Loading, SetUI } from '../../../instruments'

const Mutation = ({
  gql,
  vars,
  children,
  onSuccess,
  setUI,
  update,
  redirect,
  history,
}) => {
  return (
    <Apollo
      mutation={gql}
      variables={vars}
      onCompleted={() => {
        if (onSuccess) onSuccess()
        if (redirect) history.push(redirect)
        setUI.snackbar('Success!')
      }}
      update={update}>
      {(mutate, { loading, error }) => {
        if (loading) return <Loading />

        // TODO: Error handling
        if (error) {
          console.log(`Error! ${error.message}`)
          return null
        }
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
  redirect: PropTypes.string,
}
//export default Mutation
export default SetUI(withRouter(Mutation), { snackbar: true })
