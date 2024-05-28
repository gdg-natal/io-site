import CountValue from "./CountValue"

export default function Countdown() {
  return (
    <ul className="grid grid-rows-2 grid-cols-2 gap-8">
      <CountValue label="Dias">3</CountValue>
      <CountValue label="Horas">17</CountValue>
      <CountValue label="Minutos">20</CountValue>
      <CountValue label="Segundos">56</CountValue>
    </ul>
  )
}
