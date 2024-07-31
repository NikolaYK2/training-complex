export const extractTextParts = (text: string) => {
  const index = text.indexOf('?')

  if (text.includes('/')) {
    return {
      firstText: text.split('/')[0],
      lastText: text.split('?')[1],
      name: text.slice(text.indexOf('/') + 1, index + 1),
    }
  } else {
    return {
      firstText: text.slice(0, index + 1),
      lastText: text.slice(index + 1),
      name: '',
    }
  }
}
