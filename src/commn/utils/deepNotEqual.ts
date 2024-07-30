/**
 *   const param = { answer, answerImg, id, }
 *
 *   const dataParam = {
 *       answer: data.answer,
 *       answerImg: data.answerImg,
 *       id: data.id,
 *     }
 *
 *   deepNotEqual(param, dataParam)
 *   or
 *   if (deepNotEqual(param, dataParam)){ ... }
 */
export const deepNotEqual = <T>(obj1: T, obj2: T): boolean => {
  if (obj1 === obj2) {
    return false
  }

  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
    return true
  }

  const keys1 = Object.keys(obj1) as (keyof T)[]
  const keys2 = Object.keys(obj2) as (keyof T)[]

  if (keys1.length !== keys2.length) {
    return true
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || deepNotEqual(obj1[key], obj2[key])) {
      return true
    }
  }

  return false
}
