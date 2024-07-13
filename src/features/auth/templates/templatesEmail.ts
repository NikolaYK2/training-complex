type TemplatesAuthType = 'checkEmail' | 'recoverPassword'

export const templatesEmail: Record<TemplatesAuthType, string> = {
  checkEmail: `
  <b>Hello, ##name##!</b><br/>
  Please confirm your email by clicking on the link below:<br/>
  <a href="http://localhost:5173/confirm-email/##token##">Confirm email</a>.
  If it doesn't work, copy and paste the following link in your browser:<br/>
  http://localhost:5173/confirm-email/##token##
`,
  recoverPassword: `
  <h1>Hi, ##name##</h1><p>Click <a href="http://localhost:5173/create-password/##token##">here</a> to recover your password</p>
`,
}
