export default function parseMillsToTime(timestamp) {
  const MINUTE_IN_SECONDS = 60
  const HOUR_IN_SECONDS = MINUTE_IN_SECONDS * 60
  const DAY_IN_SECONDS = HOUR_IN_SECONDS * 24
  
  let seconds = timestamp
  const days = Math.trunc(seconds / (DAY_IN_SECONDS * 1000))
  seconds = seconds % (DAY_IN_SECONDS * 1000)
  const hours = Math.trunc(seconds / (HOUR_IN_SECONDS * 1000))
  seconds = seconds % (HOUR_IN_SECONDS * 1000)
  const minutes = Math.trunc(seconds / (MINUTE_IN_SECONDS * 1000))
  seconds = Math.trunc(seconds % (60 * 1000) / 1000)

  return { days, hours, minutes, seconds }
}