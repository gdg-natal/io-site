
import CountValue from "./CountValue"
import { useCountdown, TimeType } from '@/hooks/useCountdown'

interface ICountdownProps {
  eventTime: string
}

type ItemType = {
  label: string,
  field: 'days' | 'hours' | 'minutes' | 'seconds'
}

const COUNTDOWN_ITEMS: ItemType[] = [
  { label: 'Dias', field: 'days' },
  { label: 'Horas', field: 'hours' },
  { label: 'Minutos', field: 'minutes' },
  { label: 'Segundos', field: 'seconds' },
]

export default function Countdown({ eventTime }: ICountdownProps) {
  const countdown = useCountdown(eventTime)

  return (
    <ul className={`grid grid-rows-2 grid-cols-2 gap-8`}>
      {COUNTDOWN_ITEMS.map(({ label, field }, index) => (
        <CountValue key={index} label={label} index={index}>{countdown[field]}</CountValue>
      ))}
    </ul>
  )
}
