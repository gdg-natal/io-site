import { useState, useRef } from 'react'

const MINUTE_IN_SECONDS = 60
const HOUR_IN_SECONDS = MINUTE_IN_SECONDS * 60
const DAY_IN_SECONDS = HOUR_IN_SECONDS * 24

export function useCountdown(target: string) {
  const interval = useRef<NodeJS.Timeout>(null)
  const currentTime = new Date()
  const eventTime = new Date(target)

  const rest = Math.floor((eventTime.getTime() - currentTime.getTime()) / 1000)
  const [time, setTime] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0, rest
  })

  const decreaseTime = () => {
    setTime(({ rest }) => {
      let seconds = rest
      const days = Math.floor(seconds / DAY_IN_SECONDS)
      seconds = seconds % DAY_IN_SECONDS
      const hours = Math.floor(seconds / HOUR_IN_SECONDS)
      seconds = seconds % HOUR_IN_SECONDS
      const minutes = Math.floor(seconds / MINUTE_IN_SECONDS)
      seconds = seconds % MINUTE_IN_SECONDS

      return ({
        rest: rest - 1,
        days, hours, minutes, seconds
      })
    })
  }

  if (!interval.current) {
    interval.current = setInterval(decreaseTime, 1000)
  }

  return time
}
