import { formErrors } from 'instruments'

const errors = [
  {
    key: 'permissions',
    name: 'permissions',
    error: 'Contact your Workspace Admin to upgrade your permissions.',
  },
]

export const handleError = error => formErrors({ error, errors })

export const trimError = error => error.split(':')[1].trim()

const types = {
  deployment: {
    icon: 'dag',
    label: 'DEPLOYMENT',
  },
  workspace: {
    icon: 'stars',
    label: 'WORKSPACE',
  },
}

export const entityTypes = ({ type, deploymentId }) => {
  if (type) return types[type.toLowerCase()]
  if (deploymentId) return types.deployment
  return types.workspace
}

export const getVars = ({ deploymentId, vars = {}, getData }) => {
  const v = {
    ...vars,
    entityType: entityTypes({ deploymentId }).label,
  }
  if (v.serviceAccountId) return v
  //  v.entityType = deploymentId ? 'DEPLOYMENT' : 'WORKSPACE'
  v.entityId = deploymentId || getData.workspaceId
  return v
}
