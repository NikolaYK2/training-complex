import { SubmitHandler, useForm } from 'react-hook-form'

import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import {
  CreateNewPasswordSchema,
  CreateNewPasswordType,
} from '@/features/auth/createPassword/CreateNewPassword'
import {
  ForgotPasswordType,
  forgotPasswordSchema,
} from '@/features/auth/forgotPassword/ForgotPassword'
import { LoginFormType, loginSchema } from '@/features/auth/login/SignIn'
import { RegisterFormType, RegisterSchema } from '@/features/auth/registration/SignUp'
import { zodResolver } from '@hookform/resolvers/zod'
import { StoryObj } from '@storybook/react'

const meta = {
  component: FormAuth,
  tags: ['autodocs'],
  title: 'Components/FormAuth',
}

export default meta

type Story = StoryObj

const FormLogin = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
    resolver: zodResolver(loginSchema),
  })
  const onSubmit: SubmitHandler<LoginFormType> = data => {
    console.log(data)
    reset()
  }

  return (
    <Card>
      <FormAuth
        control={control}
        errorMessage={errors}
        formItem={['email', 'password', 'remember']}
        onSubmit={handleSubmit(onSubmit)}
        title={'sign in'}
      />
    </Card>
  )
}

export const Login: Story = {
  render: () => <FormLogin />,
}
//-----------------------------------------------------------------
const FormRegister = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<RegisterFormType>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    resolver: zodResolver(RegisterSchema),
  })
  const onSubmit: SubmitHandler<RegisterFormType> = data => {
    console.log(data)
    reset()
  }

  return (
    <Card>
      <FormAuth
        control={control}
        errorMessage={errors}
        formItem={['email', 'password', 'passwordConfirm']}
        onSubmit={handleSubmit(onSubmit)}
        title={'sign up'}
      />
    </Card>
  )
}

export const Register: Story = {
  render: () => <FormRegister />,
}
//--------------------------------------------------------------------------
const FormForgotPassword = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ForgotPasswordType>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
  })
  const onSubmit: SubmitHandler<ForgotPasswordType> = data => {
    console.log(data)
    reset()
  }

  return (
    <Card>
      <FormAuth
        control={control}
        errorMessage={errors}
        formItem={['email']}
        onSubmit={handleSubmit(onSubmit)}
        title={'forgot your password?'}
      />
    </Card>
  )
}

export const ForgotPassword: Story = {
  render: () => <FormForgotPassword />,
}
//-----------------------------------------------------------------
const FormCreateNewPassword = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CreateNewPasswordType>({
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(CreateNewPasswordSchema),
  })
  const onSubmit: SubmitHandler<CreateNewPasswordType> = data => {
    console.log(data)
    reset()
  }

  return (
    <Card>
      <FormAuth
        control={control}
        errorMessage={errors}
        formItem={['password']}
        onSubmit={handleSubmit(onSubmit)}
        title={'create new password'}
      />
    </Card>
  )
}

export const CreateNewPassword: Story = {
  render: () => <FormCreateNewPassword />,
}
//-----------------------------------------------------------------
const FormCheckEmail = () => {
  return (
    <Card>
      <FormAuth title={'check email'} />
    </Card>
  )
}

export const CheckEmail: Story = {
  render: () => <FormCheckEmail />,
}
