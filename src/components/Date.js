import React from 'react';

let day = new Date().toLocaleDateString();
class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: new Date().toLocaleDateString()
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
      day: new Date().toLocaleDateString()
    });
  }
   render() {
    return(
      <h1>{this.state.day}</h1>
      );
  }

}

export default Day;
