import { formErrors } from 'instruments'

const errors = [
  {
    key: 'You do not have the appropriate permissions for that',
    name: 'label',
    error:
      'You do not have the appropriate permissions for that. Contact your Workspace Admin to change your role.',
  },
]

export const handleError = error => formErrors({ error, errors })

export const trimError = error => error.split(':')[1].trim()

const getAvatarUrl = profile => {
  if (!profile) return
  const key = profile.find(v => v.key === 'avatarUrl')
  if (key) return key.value
  return
}

const getName = user => user.fullName || user.username || user.email

export const getProfile = user => {
  const name = getName(user)
  const avatar = getAvatarUrl(user.profile)
  return {
    name,
    avatar,
    username: user.username || user.email,
  }
}
