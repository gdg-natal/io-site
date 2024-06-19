
import CountValue from "./CountValue"
import { useCountdown } from '@/hooks/useCountdown'

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
    <ul className={`w-full md:w-2/2 grid grid-cols-2  text-white/90 gap-4`}>
      {COUNTDOWN_ITEMS.map(({ label, field }, index) => (
        <CountValue key={index} label={label} index={index}>{countdown[field]}</CountValue>
      ))}
    </ul>
  )
}
