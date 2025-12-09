"use client"

import { useState, useCallback } from "react"

export function useLoading(initialState = false) {
  const [isLoading, setIsLoading] = useState(initialState)

  const startLoading = useCallback(() => setIsLoading(true), [])
  const stopLoading = useCallback(() => setIsLoading(false), [])

  const withLoading = useCallback(\
    async <T>(asyncFn: () => Promise<T>): Promise<T | null> => {
      startLoading()
  try {
    const result = await asyncFn()
    return result
  } catch (error) {
    console.error("异步操作错误:", error)
    return null
  } finally {
    stopLoading()
  }
}
,
    [startLoading, stopLoading]
  )

return {
    isLoading,
    startLoading,
    stopLoading,
    withLoading,
  };
}
