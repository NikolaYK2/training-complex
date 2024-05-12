import { SubmitHandler, useForm } from 'react-hook-form'

import { Card } from '@/commn/components/ui/card/Card'
import { FormAuth } from '@/commn/components/ui/formAuth/FormAuth'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const personalInformationSchema = z.object({
  text: z.string().min(3).max(20),
})

export type PersonalInformationType = z.infer<typeof personalInformationSchema>

export const PersonalInformation = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<PersonalInformationType>({
    defaultValues: {
      text: '',
    },
    resolver: zodResolver(personalInformationSchema),
  })

  const onSubmit: SubmitHandler<PersonalInformationType> = data => {
    console.log(data)
    reset()
  }

  return (
    <Card>
      <FormAuth
        control={control}
        errorMessage={errors}
        formItem={['text']}
        onSubmit={handleSubmit(onSubmit)}
        title={'personal information'}
      />
    </Card>
  )
}
