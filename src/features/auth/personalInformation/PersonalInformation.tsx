import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { Page } from '@/features/pages/Page'
import {
  useGetCurrentUserDataQuery,
  useLogoutMutation,
  useUpdateUserDataMutation,
} from '@/services/auth/authService'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const personalInformationSchema = z.object({
  text: z.string().min(3).max(20),
})

export type PersonalInformationType = z.infer<typeof personalInformationSchema>

export const PersonalInformation = () => {
  const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false)

  const { data, error, isError, isLoading } = useGetCurrentUserDataQuery()
  const [
    updateUserData,
    { error: errorUpdUser, isError: isErrorUpdUser, isLoading: isLoadingUpdUser },
  ] = useUpdateUserDataMutation()
  const [logOut, { error: errorLogout, isError: isErrorLogout, isLoading: isLoadingLogout }] =
    useLogoutMutation()
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
      if (isEditingPersonalInfo) {
        const formData = new FormData()

        formData.append('name', data.text)
        await updateUserData(formData)
        setIsEditingPersonalInfo(false)
      } else {
        await logOut()
      }
    } catch (e) {
      console.error('Error: ', e)
    }
  }

  useEffect(() => {
    if (data?.name) {
      setValue('text', data.name)
    }
  }, [data, setValue])

  if (isErrorUpdUser || isError || isErrorLogout) {
    return <div>Error: {JSON.stringify(error || errorUpdUser || errorLogout)}</div>
  }

  return (
    <Page marginTop={'var(--margin-top-page)'}>
      <Card>
        {isLoading || isLoadingUpdUser || isLoadingLogout ? (
          <Loading />
        ) : (
          <FormAuth
            control={control}
            errorMessage={errors}
            formItem={['text']}
            isEditingPersonalInfo={isEditingPersonalInfo}
            onSubmit={handleSubmit(onSubmit)}
            setIsEditingPersonalInfo={setIsEditingPersonalInfo}
            title={'personal information'}
          />
        )}
      </Card>
    </Page>
  )
}
