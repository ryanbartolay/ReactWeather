var axios = require("axios");

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=937fdcda512f823ea2a963b3f1d178b1&units=imperial";

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestURI = `${OPEN_WEATHER_MAP_URL}&q=${location}`;

        console.log(requestURI);
        
        return axios.get(requestURI).then(function (res) {
            //debugger;
            if (res.data.cod && res.data.message) {
                throw new Error("success axios but error", res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error("error axios", res.data.message);
        });
    }
}