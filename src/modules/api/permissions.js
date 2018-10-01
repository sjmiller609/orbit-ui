import gql from 'graphql-tag'

export const permissions = gql`
  fragment permissions on Permissions {
    userUserView
    userUserViewOther
    userUserUpdate
    userUserDelete
    userUserServiceAccount
    userGroupCreate
    userGroupList
    userGroupView
    userGroupUpdate
    userGroupDelete
    userGroupUserAdd
    userGroupUserRemove
    userGroupUserList
    userGroupUserManagePermissions
    userRoleCreate
    userRoleList
    userRoleView
    userRoleUpdate
    userRoleDelete
    userWorkspaceCreate
    userWorkspaceList
    userWorkspaceView
    userWorkspaceUpdate
    userWorkspaceDelete
    userWorkspaceUserAdd
    userWorkspaceUserRemove
    userWorkspaceUserList
    userDeploymentCreate
    userDeploymentList
    userDeploymentView
    userDeploymentUpdate
    userDeploymentDelete
    userDeploymentResources
    userDeploymentImages
    userDeploymentExternal
    userWorkspaceServiceAccountCreate
    userWorkspaceServiceAccountList
    userWorkspaceServiceAccountView
    userWorkspaceServiceAccountUpdate
    userWorkspaceServiceAccountDelete
    userDeploymentServiceAccountCreate
    userDeploymentServiceAccountList
    userDeploymentServiceAccountView
    userDeploymentServiceAccountUpdate
    userDeploymentServiceAccountDelete
    globalUserCreate
    globalUserList
    globalUserView
    globalUserUpdate
    globalUserDelete
    globalGroupCreate
    globalGroupList
    globalGroupView
    globalGroupUpdate
    globalGroupDelete
    globalGroupUserAdd
    globalGroupUserRemove
    globalGroupUserList
    globalGroupUserManagePermissions
    globalRoleCreate
    globalRoleList
    globalRoleView
    globalRoleUpdate
    globalRoleDelete
    globalWorkspaceCreate
    globalWorkspaceList
    globalWorkspaceView
    globalWorkspaceUpdate
    globalWorkspaceDelete
    globalWorkspaceUserAdd
    globalWorkspaceUserRemove
    globalWorkspaceUserInvites
    globalWorkspaceUserList
    globalDeploymentCreate
    globalDeploymentList
    globalDeploymentView
    globalDeploymentUpdate
    globalDeploymentDelete
    globalDeploymentResources
    globalDeploymentImages
    globalDeploymentExternal
    globalServiceAccountCreate
    globalServiceAccountList
    globalServiceAccountView
    globalServiceAccountUpdate
    globalServiceAccountDelete
    globalSystemSettingList
    globalSystemSettingView
    globalSystemSettingUpdate
  }
`

// export const userPermissions = gql`
//   fragment userPermissions on Permissions {
//     userUserView
//     userUserViewOther
//     userUserUpdate
//     userUserDelete
//     userUserServiceAccount
//   }
// `
//
// export const groupPermissions = gql`
//   fragment groupPermissions on Permissions {
//     userGroupCreate
//     userGroupList
//     userGroupView
//     userGroupUpdate
//     userGroupDelete
//   }
// `
//
// export const userGroupPermissions = gql`
//   fragment userGroupPermissions on Permissions {
//     userGroupUserAdd
//     userGroupUserRemove
//     userGroupUserList
//     userGroupUserManagePermissions
//   }
// `
//
// export const rolePermissions = gql`
//   fragment rolePermissions on Permissions {
//     userRoleCreate
//     userRoleList
//     userRoleView
//     userRoleUpdate
//     userRoleDelete
//   }
// `
//
// export const workspacePermissions = gql`
//   fragment workspacePermissions on Permissions {
//     userWorkspaceCreate
//     userWorkspaceList
//     userWorkspaceView
//     userWorkspaceUpdate
//     userWorkspaceDelete
//   }
// `
//
// export const workspaceUserPermissions = gql`
//   fragment workspaceUserPermissions on Permissions {
//     userWorkspaceUserAdd
//     userWorkspaceUserRemove
//     userWorkspaceUserList
//
//     userDeploymentCreate
//     userDeploymentList
//     userDeploymentView
//     userDeploymentUpdate
//     userDeploymentDelete
//     userDeploymentResources
//     userDeploymentImages
//     userDeploymentExternal
//   }
// `
//
// export const workspaceServiceAccountPermissions = gql`
//   fragment workspaceServiceAccountPermissions on Permissions {
//     userWorkspaceServiceAccountCreate
//     userWorkspaceServiceAccountList
//     userWorkspaceServiceAccountView
//     userWorkspaceServiceAccountUpdate
//     userWorkspaceServiceAccountDelete
//   }
// `
//
// export const deploymentServiceAccountPermissions = gql`
//   fragment deploymentServiceAccountPermissions on Permissions {
//     userDeploymentServiceAccountCreate
//     userDeploymentServiceAccountList
//     userDeploymentServiceAccountView
//     userDeploymentServiceAccountUpdate
//     userDeploymentServiceAccountDelete
//   }
// `
//
// export const globalUserPermissions = gql`
//   fragment globalUserPermissions on Permissions {
//     globalUserCreate
//     globalUserList
//     globalUserView
//     globalUserUpdate
//     globalUserDelete
//   }
// `
//
// export const globalGroupPermissions = gql`
//   fragment globalGroupPermissions on Permissions {
//     globalGroupCreate
//     globalGroupList
//     globalGroupView
//     globalGroupUpdate
//     globalGroupDelete
//   }
// `
//
// export const globalGroupUserPermissions = gql`
//   fragment globalGroupUserPermissions on Permissions {
//     globalGroupUserAdd
//     globalGroupUserRemove
//     globalGroupUserList
//     globalGroupUserManagePermissions
//   }
// `
//
// export const globalRolePermissions = gql`
//   fragment globalRolePermissions on Permissions {
//     globalRoleCreate
//     globalRoleList
//     globalRoleView
//     globalRoleUpdate
//     globalRoleDelete
//   }
// `
//
// export const globalWorkspacePermissions = gql`
//   fragment globalWorkspacePermissions on Permissions {
//     globalWorkspaceCreate
//     globalWorkspaceList
//     globalWorkspaceView
//     globalWorkspaceUpdate
//     globalWorkspaceDelete
//   }
// `
//
// export const globalWorkspaceUserPermissions = gql`
//   fragment globalWorkspaceUserPermissions on Permissions {
//     globalWorkspaceUserAdd
//     globalWorkspaceUserRemove
//     globalWorkspaceUserInvites
//     globalWorkspaceUserList
//   }
// `
//
// export const globalDeploymentPermissions = gql`
//   fragment globalDeploymentPermissions on Permissions {
//     globalDeploymentCreate
//     globalDeploymentList
//     globalDeploymentView
//     globalDeploymentUpdate
//     globalDeploymentDelete
//     globalDeploymentResources
//     globalDeploymentImages
//     globalDeploymentExternal
//   }
// `
//
// export const globalServiceAccountPermissions = gql`
//   fragment globalServiceAccountPermissions on Permissions {
//     globalServiceAccountCreate
//     globalServiceAccountList
//     globalServiceAccountView
//     globalServiceAccountUpdate
//     globalServiceAccountDelete
//   }
// `
//
// export const globalSettingsPermissions = gql`
//   fragment globalSettingsPermissions on Permissions {
//     globalSystemSettingList
//     globalSystemSettingView
//     globalSystemSettingUpdate
//   }
// `
