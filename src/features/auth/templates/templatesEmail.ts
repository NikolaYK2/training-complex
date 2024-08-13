type TemplatesAuthType = 'checkEmail' | 'recoverPassword'

export const templatesEmail: Record<TemplatesAuthType, string> = {
  checkEmail: `
  <b>Hello, ##name##!</b><br/>
  Please confirm your email by clicking on the link below:<br/>
  <a href="${import.meta.env.VITE_BASE_APP_URL}/confirm-email/##token##">Confirm email</a>.
  If it doesn't work, copy and paste the following link in your browser:<br/>
  ${import.meta.env.VITE_BASE_APP_URL}/confirm-email/##token##
`,
  recoverPassword: `
  <h1>Hi, ##name##</h1><p>Click <a href="${
    import.meta.env.VITE_BASE_APP_URL
  }/create-password/##token##">here</a> to recover your password</p>
`,
}
