const request = require('request')

const forecast = (lattitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/283fd5d253f13f98bc0156a66e538df1/'  + lattitude + ',' + longitude

    request({ url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to weather service.', undefined)
        } else if(response.body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            let forecast = `${response.body.daily.data[0].summary} The high is ${Math.floor(response.body.daily.data[0].temperatureHigh)} with a low of ${Math.floor(response.body.daily.data[0].temperatureLow)}. It is currently ${Math.floor(response.body.currently.temperature)} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain and the U.V index is ${response.body.currently.uvIndex}`
            callback(undefined, forecast)
        }
    })
}

module.exports = forecast