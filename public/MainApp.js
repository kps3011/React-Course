
var React = require('react')
var ReactDOM = require('react-dom')
var WeatherMain = require('WeatherMain')
var Api = require('Api')







ReactDOM.render(
    <WeatherMain location = "Mumbai"/>,
    document.getElementById('app')
)