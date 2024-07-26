import { useCallback, useEffect, useState } from 'react'

export default function useSchedule(stage: 'genipabu' | 'morro' | 'cajueiro') {
  const [data, setData] = useState<{ next: any[], now: any }>({ now: null, next: [] })
  const [calendar, setCalendar] = useState(null)

  const getRunningNow = (data: any[] | undefined, timeNow: number) => {
    const runningNow = data?.findLast((schedule: { start: string | number | Date; end: string | number | Date }) => {
      const start = new Date(schedule.start).getTime()
      const end = new Date(schedule.end).getTime()

      return start <= timeNow && end > timeNow
    })

    return runningNow
  }

  const getNext = (data: any[], timeNow: number) => {
    const next = data.filter((schedule: { start: string | number | Date }) =>
      new Date(schedule.start).getTime() > timeNow
    )

    return next ?? []
  }
  const handleData = useCallback(() => {
    const schedule = calendar?.[stage] ?? []
    // const timeNow = new Date('2024-07-27T12:31:09.542Z').getTime()
    const timeNow = new Date(Date.now()).getTime()

    setData({ now: getRunningNow(schedule, timeNow), next: getNext(schedule, timeNow) })
  }, [calendar, stage])

  useEffect(() => {
    const interval = setInterval(() => {
      handleData()
    }, 10000)

    handleData()
    return () => clearInterval(interval)
  }, [calendar, handleData, stage])

  useEffect(() => {
    const fetchCalendar = async () => {
      const response = await fetch('/api/schedule').then(res => res.json())

      setCalendar(response?.data)
    }

    fetchCalendar()
  }, [])

  return data
}
