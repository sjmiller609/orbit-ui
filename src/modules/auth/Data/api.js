import gql from 'graphql-tag'
import { authUser } from 'modules/api/fragments'

export default {
  AuthConfig: gql`
    query authConfig(
      $redirect: String!
      $duration: Int
      $inviteToken: String
      $extras: JSON
    ) {
      authConfig(
        redirect: $redirect
        duration: $duration
        inviteToken: $inviteToken
        extras: $extras
      ) {
        localEnabled
        googleEnabled
        googleOAuthUrl
        githubEnabled
        githubOAuthUrl
        auth0Enabled
        auth0OAuthUrl
        publicSignup
        initialSignup
      }
    }
  `,
  Login: gql`
    mutation createToken($password: String!, $email: String, $duration: Int) {
      createToken(password: $password, identity: $email, duration: $duration) {
        ...authUser
      }
    }
    ${authUser}
  `,
  Signup: gql`
    mutation createUser(
      $email: String!
      $password: String!
      $username: String
      $profile: JSON
      $inviteToken: String
      $duration: Int
    ) {
      createUser(
        email: $email
        password: $password
        username: $username
        profile: $profile
        inviteToken: $inviteToken
        duration: $duration
      ) {
        ...authUser
      }
    }

    ${authUser}
  `,
  ForgotPassword: gql`
    mutation forgotPassword($email: String!) {
      forgotPassword(email: $email)
    }
  `,
  ResetPassword: gql`
    mutation resetPassword($token: String!, $password: String!) {
      resetPassword(token: $token, password: $password) {
        ...authUser
      }
    }
    ${authUser}
  `,
  ResendConfirmation: gql`
    mutation resendConfirmation($email: String!) {
      resendConfirmation(email: $email)
    }
  `,
  VerifyEmail: gql`
    mutation confirmEmail($token: String!, $duration: Int) {
      confirmEmail(token: $token, duration: $duration) {
        ...authUser
      }
    }
    ${authUser}
  `,
}
