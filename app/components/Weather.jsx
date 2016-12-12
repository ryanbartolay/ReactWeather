var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeather = require("openWeather");

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        };
    },
    handleSearch: function (location) {
        var that = this;

        this.setState({
            isLoading: true
        });

        openWeather.getTemp(location).then(function (res) {
            that.setState({
                isLoading: false,
                location: location,
                temp: res
            });
        }, function (res) {
            alert(res);
            this.setState({
                isLoading: false
            });
        });
    },
    render: function () {
        var {isLoading, location, temp} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching Weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp} />;
            }
        }

        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;