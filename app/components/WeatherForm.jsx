var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var cityNameRef = this.refs.cityName;
    var cityName = cityNameRef.value;
    if (cityName.length > 0) {
      cityNameRef.value = '';
      this.props.onNewSubmit(cityName);

    }
  },
  render: function () {
    return(
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="cityName" placeholder="Enter city name"/>
        <button>Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
