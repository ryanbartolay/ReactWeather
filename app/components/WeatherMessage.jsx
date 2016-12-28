var React = require("react");

var WeatherMessage = ({location, temp}) => {
    return (
        <h2>It is {temp} in {location}</h2>
    );
};
module.exports = WeatherMessage;