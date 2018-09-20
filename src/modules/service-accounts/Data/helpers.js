export const getVars = ({ deploymentId, vars = {}, getData }) => {
  const v = {
    ...vars,
    entityType: deploymentId ? 'DEPLOYMENT' : 'WORKSPACE',
  }
  if (v.serviceAccountId) return v
  //  v.entityType = deploymentId ? 'DEPLOYMENT' : 'WORKSPACE'
  v.entityId = deploymentId || getData.workspaceId
  return v
}
