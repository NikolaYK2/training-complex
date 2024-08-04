type PrepareFormDataProps = {
  answer?: string
  answerImg?: File | string
  avatar?: File | string
  cover?: File | string
  initialAnswerImg?: string
  initialQuestionImg?: string
  isPrivate?: boolean
  name?: string
  question?: string
  questionImg?: File | string
}
export const prepareFormData = ({
  answer,
  answerImg,
  avatar,
  cover,
  isPrivate,
  name,
  question,
  questionImg,
}: PrepareFormDataProps): FormData => {
  const formData = new FormData()

  appendFieldImage('questionImg', questionImg, formData)
  appendFieldImage('answerImg', answerImg, formData)
  appendFieldImage('cover', cover, formData)
  appendFieldImage('avatar', avatar, formData)

  appendFieldText('name', name, formData)
  appendFieldText('isPrivate', isPrivate, formData)
  appendFieldText('answer', answer, formData)
  appendFieldText('question', question, formData)

  return formData
}

const appendFieldImage = (
  key: string,
  file: File | string | undefined,
  formData: FormData
): void => {
  if (file instanceof File) {
    formData.append(key, file)
  } else if (file === null) {
    formData.append(key, '')
  }
}
const appendFieldText = (
  key: string,
  value: boolean | string | undefined,
  formData: FormData
): void => {
  if (value !== undefined && value !== '') {
    formData.append(key, value.toString())
  }
}
