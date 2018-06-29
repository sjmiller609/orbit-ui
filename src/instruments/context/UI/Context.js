import React from 'react'

// Set default values here
export const GetContext = React.createContext({
  snackbar: null,
  dialog: null,
  loading: null,
})

export const SetContext = React.createContext({
  snackbar: null,
  dialog: null,
  loading: null,
})
