
import CountValue from "./CountValue"
import { useCountdown } from '@/hooks/useCountdown'

const items = [
  { label: 'Dias', field: 'days' },
  { label: 'Horas', field: 'hours' },
  { label: 'Minutos', field: 'minutes' },
  { label: 'Segundos', field: 'seconds' },
]

export default function Countdown({ eventTime }) {
  const countdown = useCountdown(eventTime)

  return (
    <ul className={`grid grid-rows-2 grid-cols-2 gap-8`}>
      {items.map(({ label, field }, index) => (
        <CountValue key={index} label={label} index={index}>{countdown[field]}</CountValue>
      ))}
    </ul>
  )
}
