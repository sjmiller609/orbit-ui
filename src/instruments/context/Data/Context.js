import React from 'react'

export const GetContext = React.createContext({
  workspaceId: null,
  auth: null,
})

export const SetContext = React.createContext({
  workspaceId: null,
  auth: null,
})
