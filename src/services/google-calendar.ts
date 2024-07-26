// import { CalendarDayType } from 'Scheduling/types'

const API_URL = 'https://www.googleapis.com/calendar/v3/calendars/'

export const getCalendar = async (): any => {
  const { CALENDAR_ID, API_KEY } = process.env
  const response = await fetch(`${API_URL + CALENDAR_ID}/events?key=${API_KEY}`)

  const data = response.json()

  return data
}
