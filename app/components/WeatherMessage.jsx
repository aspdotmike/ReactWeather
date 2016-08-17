var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var cityName = this.props.cityName;
    var temperature = this.props.temperature;

    return(
      <h4>It's {temperature} in {cityName}</h4>
    );
  }
});

var WeatherMessage = ({cityName, temperature}) => {
  return(
    <h4>It's {temperature} in {cityName}</h4>
  )
};

module.exports = WeatherMessage;
