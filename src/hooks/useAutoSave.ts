import { useEffect, useRef } from 'react'

export function useAutoSave<T>(
  data: T,
  saveFn: (data: T) => Promise<void>,
  delay = 500
) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isFirstRender = useRef(true)
  const prevDataRef = useRef<string>('')

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      prevDataRef.current = JSON.stringify(data)
      return
    }

    const serialized = JSON.stringify(data)
    if (serialized === prevDataRef.current) return
    prevDataRef.current = serialized

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      saveFn(data)
    }, delay)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [data, saveFn, delay])
}
