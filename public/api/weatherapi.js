//weather api
var axios = require('axios')

const WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=6e178c7212979e56db64138da346435c'

module.exports= {
    getTemp: function(location){
        var el = encodeURIComponent(location)

        var url =`${WEATHER_URL}&q=${el}`

        return axios.get(url).then(function(res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message)
            }

            else {
                res.data.main.temp;
                
            }
        }, function(res){
            throw new Error(res.data.message)
        })
    }
}