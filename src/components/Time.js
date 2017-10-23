import React from 'react';

let time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
      );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
    tick() {
    this.setState({
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    });
  }
   render() {
    return(
      <h1 className = "clock">{this.state.time}</h1>
      );
  }

}

export default Time;
