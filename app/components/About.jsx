var React = require("react");

// Refactored component
// this is essential for stateless component
var About = (props) => {
    return (
            <div>
                <h1 className="text-center">About</h1>
                <p>This is a weather application build on React. I have built this 
                    for the Complete React Web application Developer Course.</p>
                <p>Here are some of the tools I used</p>
                <ul>
                    <li>
                        <a href="http://facebook.github.io/react">React</a> - This was the javascript framework used.
                    </li>
                    <li>
                        <a href="http://openweathermap.org">Open Weather Map</a> - I used open weather map to search for weather data by city name.
                    </li>
                </ul>
            </div>
        );
};

module.exports = About;