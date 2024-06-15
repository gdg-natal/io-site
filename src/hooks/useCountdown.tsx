import { useState, useRef } from 'react'

export function useCountdown(target: string) {
  const interval = useRef(null)
  const currentTime = new Date()
  const eventTime = new Date(target)
  const restTime = eventTime.getTime() - currentTime.getTime()
  const [time, setTime] = useState(restTime)

  const decreaseTime = () => {
    setTime((prevTime) => prevTime - 1)
  }

  if (!interval.current) {
    interval.current = setInterval(decreaseTime, 1000)
  }

  return time
}
