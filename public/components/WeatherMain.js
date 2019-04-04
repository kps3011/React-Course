var React= require('react')
var WeatherForm = require('WeatherForm')
var WeatherMessage = require('WeatherMessage')
var Api = require('Api')

var WeatherMain = React.createClass({
   
    getInitialState: function(){
        return {
            location : 'Srinagar',
            temp : 10
        }
    },


    handleSearch: function(location){

        var that= this
        Api.getTemp(location).then(function(temp){
            
        that.setState({
            location: location,
            temp: temp
        })
        },function(errorMessage){
            alert(errorMessage)
        })
    },

    render: function(){
        var {temp, location} = this.state
        return (
            <div>
                <h3>Weather Application</h3>
                <WeatherForm onSearch= {this.handleSearch} />
                <WeatherMessage location= {location} temp={temp} />

            </div>
        )
    }
})

module.exports= WeatherMain