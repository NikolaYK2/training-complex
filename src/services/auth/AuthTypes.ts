export type RegistrationResponse = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type RegistrationArgs = {
  email: string
  html: string
  password: string
  sendConfirmationEmail: boolean
}
