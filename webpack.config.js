
module.exports = {
    entry: './public/MainApp.js',
    output:{
        path: __dirname,
    filename: 'public/bundle.js'
    },

resolve: {
    root: __dirname,
    alias: {
        WeatherMain: 'public/components/WeatherMain.js',
        WeatherMessage: 'public/components/WeatherMessage.js',
        WeatherForm: 'public/components/WeatherForm.js',
        Api: 'public/api/weatherapi.js'
    },
    extensions: ['','.js']
},    


module :{
    loaders : [
        {
            loader : 'babel-loader',
            query : {
                presets : ['react', 'es2015']
            },
            test : /\.js?$/,
            exclude : /(node_modules)/
        }
    ]
}
}