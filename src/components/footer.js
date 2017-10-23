import React from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Dragula from 'react-dragula';

class Footer extends React.Component {
  render () {
    return <div id = "content-wrapper" ref={this.dragulaDecorator}>
      <Link to="/Exercise"><button id="exercise" className = "content-button">Exercise</button></Link>
      <Link to="/Todo"><button id = "todo" className = "content-button">Todo List</button></Link>
      <Link to="/"><button id="home" className = "content-button">Home</button></Link>
      <Link to="/Calendar"><button id="calendar" className = "content-button">Calendar</button></Link>
      <Link to="/Timer"><button id="timer" className = "content-button">Timer</button></Link>
    </div>;
  }
  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = { };
      Dragula([componentBackingInstance], options);
    }
  };
};

 export default Footer;