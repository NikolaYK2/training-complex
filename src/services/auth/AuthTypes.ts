export type ResponseType = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}
export type LoginResponse = {
  accessToken: string
  refreshToken: string
}
export type UserDataArgs = {
  avatar?: File
  name?: string
}
export type RegistrationArgs = {
  email: string
  html: string
  password: string
  sendConfirmationEmail: boolean
}
export type LoginArgs = Pick<RegistrationArgs, 'email' | 'password'> & {
  rememberMe: boolean
}
export type VerifyEmailArgc = Pick<RegistrationArgs, 'html'> & { userId: string }

export type PasswordRecoveryEmailArgs = Pick<RegistrationArgs, 'email' | 'html'>

export type PasswordResetArgs = Pick<RegistrationArgs, 'password'> & {
  token: string
}
