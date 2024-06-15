import CountValue from "./CountValue"
import { useCountdown } from '@/hooks/useCountdown'
import parseMillsToTime from '@/utils/parseMillsToTime'

export default function Countdown() {
  const countdown = useCountdown('2024-06-15T04:00:00')
  const { seconds } = parseMillsToTime(countdown)

  return (
    <ul className={`grid grid-rows-2 grid-cols-2 gap-8`}>
      {[0, 1, 2, 3].map((value, index) => (
        <CountValue key={index} label="Dias" index={index}><span>{seconds}</span></CountValue>
      ))}
    </ul>
  )
}
