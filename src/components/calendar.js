//used the npm component big calendar and its documentation for this one
import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BigCalendar from 'react-big-calendar';
import { getEvents } from './google-calendar';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class Calendar extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
	  <div>
	  <App></App>
	  <div className = "content-display">
      <BigCalendar
        style={{height: '420px'}}
        events={[]}/>
	  </div>
	  </div>

    )
  }
}
export default Calendar;