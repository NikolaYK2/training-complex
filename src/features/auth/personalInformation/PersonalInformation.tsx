import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import { Loading } from '@/commn/components/ui/loading/Loading'
import { Page } from '@/features/pages/Page'
import { useGetCurrentUserDataQuery } from '@/services/auth/authService'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const personalInformationSchema = z.object({
  text: z.string().min(3).max(20),
})

export type PersonalInformationType = z.infer<typeof personalInformationSchema>

export const PersonalInformation = () => {
  const { data, isLoading } = useGetCurrentUserDataQuery()

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm<PersonalInformationType>({
    defaultValues: {
      text: data?.name,
    },
    resolver: zodResolver(personalInformationSchema),
  })

  const onSubmit: SubmitHandler<PersonalInformationType> = data => {
    reset()
  }

  useEffect(() => {
    if (data?.name) {
      setValue('text', data.name)
    }
  }, [data, setValue])

  return (
    <Page marginTop={'var(--margin-top-page)'}>
      <Card>
        {isLoading ? (
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
