import { formErrors } from 'instruments'

const errors = [
  {
    key: 'permissions',
    name: 'permissions',
    error: 'You must be an admin to change these settings.',
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
