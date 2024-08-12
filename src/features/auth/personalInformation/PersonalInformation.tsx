import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { Page } from '@/commn/components/ui/pages/Page'
import { deepNotEqual } from '@/commn/utils/deepNotEqual'
import { tryCatch } from '@/commn/utils/tryCatch'
import { useGetCurrentUserDataQuery, useLogoutMutation } from '@/services/auth/authService'
import { useAuthMutation } from '@/services/lib/auth/useAuthMutation'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const personalInformationSchema = z.object({
  text: z.string().trim().min(3).max(20),
})

export type PersonalInformationType = z.infer<typeof personalInformationSchema>

export const PersonalInformation = () => {
  const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false)
  const dispatch = useDispatch()
  const { data, error, isError, isLoading } = useGetCurrentUserDataQuery()
  const { errorUpdUser, isErrorUpdUser, isLoadingUpdUser, updateUserData } = useAuthMutation()

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
  const param = { name: data?.name }

  const onSubmit: SubmitHandler<PersonalInformationType> = async data => {
    const dataParam = {
      name: data.text,
    }

    if (deepNotEqual(param, dataParam)) {
      return tryCatch(dispatch, async () => {
        if (isEditingPersonalInfo) {
          await updateUserData({ name: data.text }).unwrap()
          setIsEditingPersonalInfo(false)
        } else {
          await logOut()
        }
      })
    } else {
      setIsEditingPersonalInfo(false)
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
