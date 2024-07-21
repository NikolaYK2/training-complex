export function debounce<T extends any[]>(callee: (...args: T) => void, delay: number) {
  let timeoutId: null | number = null

  return function (...args: T) {
    if (timeoutId !== null) {
      clearTimeout(timeoutId)
    }
    timeoutId = window.setTimeout(() => {
      callee(...args)
    }, delay)
  }
}
