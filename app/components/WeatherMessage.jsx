var React = require("react");

var WeatherMessage = React.createClass({
    render: function () {
        
        var {location, temp} = this.props;
        
        return (
            <h2>It is {temp} in {location}</h2>
        );
    }
});

module.exports = WeatherMessage;