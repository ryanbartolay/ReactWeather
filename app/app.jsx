var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var Main = require("Main");
var About = require("About");
var Weather = require("Weather");
var Examples = require("Examples");

// Load Foundation
require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();

// This is saying that, if path is only / it will render IndexRoute
// whilst if path is /about it will render the mapped Route component
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About} />
            <Route path="examples" component={Examples} />
            <IndexRoute component={Weather} />
        </Route>
    </Router>,
    document.getElementById("app")
);