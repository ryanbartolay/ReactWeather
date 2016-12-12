var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeather = require("openWeather");

var Weather = React.createClass({
    getInitialState: function () {
        return {
            location: "Manila",
            temp: 34
        };
    },
    handleSearch: function(location) {
        var that = this;
        openWeather.getTemp(location).then(function (res) {
            that.setState( {
                location: location,
                temp: res
            });
        }, function (res){
            alert(res);
        });
    },
    render: function () {
        var {location, temp} = this.state;
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch} />
                <WeatherMessage location={location} temp={temp} />
            </div>
        );
    }
});

module.exports = Weather;