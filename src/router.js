import React from 'react';
import App from './components/App';
import { BrowserRouter, Route } from 'react-router-dom';
import Todo from './components/todo.js';
import Exercise from './components/exercise.js';
import Calendar from './components/calendar.js';
import Timer from './components/timer.js';

export default (
    <BrowserRouter>
        <div className='router'>
            <Route exact path='/' render={() => <App />} />/>
            <Route exact path='/todo' render={() => <Todo />} />
            <Route exact path='/exercise' render={() => <Exercise/>} />
            <Route exact path='/calendar' render={() => <Calendar />} />
            <Route exact path='/timer' render={() => <Timer />} />
         </div>
    </BrowserRouter>
)
