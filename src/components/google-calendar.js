import request from 'superagent'

const CALENDAR_ID = 'danmerciagmail.com'
const API_KEY = 'AIzaSyCkrBJ3o-1kYlerxtnjhRQTY8ANz-Gf0nU'
let url = `https://www.googleapis.com/calendar/v3/calendars/${'danmerci@gmail.com'}/events?key=${'AIzaSyCkrBJ3o-1kYlerxtnjhRQTY8ANz-Gf0nU'}`

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event) => {
          events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,
          })
        })
        callback(events)
      }
    })
}