import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';

class Timer extends React.Component {
	constructor(props) {
    super(props);
	 this.state = { 
		secondsElapsed: 65
		};
	}
	handleStartClick() {
		var _this = this;

		setInterval( () => {
			_this.setState({
				secondsElapsed: _this.state.secondsElapsed + 1
			});
		}, 1000)
	}
	getSeconds() {
		return ('0' + this.state.secondsElapsed % 60).slice(-2);
	}

	getMinutes() {
		return Math.floor(this.state.secondsElapsed / 60);
	}

	handleStopClick() {
		alert("stopping")
	}
  render() {
   return(
   	<div>
   		<App></App>
   		<div className = "content-display">
       			<h1>Timer</h1> 
       			<h1>{this.getMinutes()}:{this.getSeconds()}</h1>
       			<button type="button" onClick = {this.handleStartClick}>start</button>
       			<button type="button" onClick = {this.handleStopClick}>stop</button>
     		</div>
    </div>
     );
 }
}
export default Timer;