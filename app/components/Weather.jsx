var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getDefaultProps: function () {
    return {
      isLoading: false
    };
  },
  getInitialState: function () {
    return {
      cityName: this.props.cityName,
      temperature: this.props.temperature,
      isLoading: this.props.isLoading
    };
  },
  handleGetWeather: function (cityName) {
    var that = this;
    this.setState({isLoading: true});
    openWeatherMap.getTemp(cityName).then(function(temp) {
      that.setState({
        cityName: cityName,
        temperature: temp,
        isLoading: false
      });
    }, function(errorMessage) {
       that.setState({isLoading: false});
       alert(errorMessage);

    });

  },
  render: function () {
    var {cityName, temperature, isLoading} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temperature && location) {
        return <WeatherMessage cityName={cityName} temperature={temperature}/>
      }
    }

    return(
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onNewSubmit={this.handleGetWeather}/>
        {renderMessage()}

      </div>
    );
  }
});

module.exports = Weather;
