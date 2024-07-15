import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { Page } from '@/features/pages/Page'
import { useGetCurrentUserDataQuery, useUpdateUserDataMutation } from '@/services/auth/authService'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const personalInformationSchema = z.object({
  text: z.string().min(3).max(20),
})

export type PersonalInformationType = z.infer<typeof personalInformationSchema>

export const PersonalInformation = () => {
  const { data, error, isError, isLoading } = useGetCurrentUserDataQuery()
  const [
    updateUserData,
    { error: errorUpdUser, isError: isErrorUpdUser, isLoading: isLoadingUpdUser },
  ] = useUpdateUserDataMutation()
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<PersonalInformationType>({
    defaultValues: {
      text: data?.name,
    },
    resolver: zodResolver(personalInformationSchema),
  })

  const onSubmit: SubmitHandler<PersonalInformationType> = async data => {
    try {
      const formData = new FormData()

      formData.append('name', data.text)

      await updateUserData(formData)
    } catch (e) {
      console.error('upd Text user data ', e)
    }
  }

  useEffect(() => {
    if (data?.name) {
      setValue('text', data.name)
    }
  }, [data, setValue])

  if (isErrorUpdUser || isError) {
    if (error) {
      return <div>Error: {JSON.stringify(error)}</div>
    }
    if (errorUpdUser) {
      return <div>Error: {JSON.stringify(errorUpdUser)}</div>
    }
  }

  return (
    <Page marginTop={'var(--margin-top-page)'}>
      <Card>
        {isLoading || isLoadingUpdUser ? (
          <Loading />
        ) : (
          <FormAuth
            avatar={data?.avatar}
            control={control}
            descriptionMessage={data?.email}
            errorMessage={errors}
            formItem={['text']}
            nikName={data?.name}
            onSubmit={handleSubmit(onSubmit)}
            title={'personal information'}
          />
        )}
      </Card>
    </Page>
  )
}
