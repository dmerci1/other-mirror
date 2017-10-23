import React from 'react';
import xhr from 'xhr';


class Weather extends React.Component {
  constructor(props){
    super(props);

  
  this.state = {
    location: 'Astoria, NY',
    data: {}
  };
  }
  fetchData = (e) => {
    e.preventDefault();
    var location = encodeURIComponent(this.state.location);

    var api = 'http://api.openweathermap.org/data/2.5/forecast?q=NewYork';
    var key = '&APPID=34e6d8a2243906ca70ce1ef0cf68b94d&units=imperial';
    var url = api + location + key;

    var self = this;

  xhr({
    url: url
  }, function (err, data) {
    self.setState({
      data: JSON.parse(data.body)
    });
  });
  };

  changeLocation = (e) => {
    this.setState({
      location: e.target.value
    });
  };

  render() {

  if (this.state.data.list) {
    //current condition fetches
    var location = '';
    var currentIcon = '';
    var currentTemp = '';
    var currentCondition = '';
    var high = '';
    var low = '';
    location = this.state.location;
    currentCondition = this.state.data.list[0].weather[0].main;
    currentTemp = this.state.data.list[0].main.temp;
    high = this.state.data.list[0].main.temp_max;
    low = this.state.data.list[0].main.temp_min;

    //first of 5days fetches
    var firstDayIcon = '';
    var firstDayCondition = "";
    var firstDayHigh = '';
    var firstDayLow = '';
    firstDayCondition = this.state.data.list[0].weather[0].description;
    firstDayHigh = this.state.data.list[0].main.temp_max;
    firstDayLow = this.state.data.list[0].main.temp_min;

    //second of 5days fetches
    var secondDayIcon = '';
    var secondDayCondition = "";
    var secondDayHigh = '';
    var secondDayLow = '';

    secondDayCondition = this.state.data.list[1].weather[0].description;
    secondDayHigh = this.state.data.list[1].main.temp_max;
    secondDayLow = this.state.data.list[1].main.temp_min;

    //third of 5day fetches
    var thirdDayIcon = '';
    var thirdDayCondition = "";
    var thirdDayHigh = '';
    var thirdDayLow = '';
    thirdDayCondition = this.state.data.list[2].weather[0].description;
    thirdDayHigh = this.state.data.list[2].main.temp_max;
    thirdDayLow = this.state.data.list[2].main.temp_min;

    //fourth of 5day fetches
    var fourthDayIcon = '';
    var fourthDayCondition = "";
    var fourthDayHigh = '';
    var fourthDayLow = '';
    fourthDayCondition = this.state.data.list[3].weather[0].description;
    fourthDayHigh = this.state.data.list[3].main.temp_max;
    fourthDayLow = this.state.data.list[3].main.temp_min;

    //fifth of 5day fetches
    var fifthDayIcon = '';
    var fifthDayCondition = "";
    var fifthDayHigh = '';
    var fifthDayLow = '';
    fifthDayCondition = this.state.data.list[3].weather[0].description;
    fifthDayHigh = this.state.data.list[3].main.temp_max;
    fifthDayLow = this.state.data.list[3].main.temp_min;
  }

    return (
      <div>
        <form onSubmit={this.fetchData}>
            <input type="text" name="location" value={this.state.location} onChange={this.changeLocation} />
        </form>
      <div className = "current-weather-container">
        <h1 className="current-weather">{ location }</h1>
        <h1 className="current-weather">{ currentIcon }</h1>
        <h1 className="current-weather">{ currentTemp }</h1>
        <h3 className="current-weather">{ currentCondition }</h3>
        <span>
        <h4 className="current-weather">H: { high }</h4>
        </span>
        <span>
        <h4 className="current-weather">L: { low }</h4>
        </span>
      </div>

      <div className = "five-day-container">
        <h5 className="five-day-weather">{ firstDayCondition }</h5>
        <h5 className="five-day-weather">{ firstDayHigh }</h5>
        <h5 className="five-day-weather">{ firstDayLow }</h5>


        <h5 className="five-day-weather">{ secondDayCondition }</h5>
        <h5 className="five-day-weather">{ secondDayHigh }</h5>
        <h5 className="five-day-weather">{ secondDayLow }</h5>

        <h5 className="five-day-weather">{ thirdDayCondition }</h5>
        <h5 className="five-day-weather">{ thirdDayHigh }</h5>
        <h5 className="five-day-weather">{ thirdDayLow }</h5>

        <h5 className="five-day-weather">{ fourthDayCondition }</h5>
        <h5 className="five-day-weather">{ fourthDayHigh }</h5>
        <h5 className="five-day-weather">{ fourthDayLow }</h5>

        <h5 className="five-day-weather">{ fifthDayCondition }</h5>
        <h5 className="five-day-weather">{ fifthDayHigh }</h5>
        <h5 className="five-day-weather">{ fifthDayLow }</h5>
      </div>
    </div>
    );
  }
}

export default Weather;