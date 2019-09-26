const request = require('request')

const forecast = (lattitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/283fd5d253f13f98bc0156a66e538df1/'  + lattitude + ',' + longitude

    request({ url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to weather service.', undefined)
        } else if(response.body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            let forecast = `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.`
            callback(undefined, forecast)
        }
    })
}

module.exports = forecast