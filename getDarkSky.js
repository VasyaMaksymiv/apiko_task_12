const fetch = require('node-fetch');
const darkSkyURL = 'https://api.darksky.net/forecast/';

module.exports = getDarkSky = (key, loc, calback) => {
	fetch(`${darkSkyURL}${key}/${loc.lat},${loc.lng}`)
		.then(response => response.json())
		.then(data => {
			const weather = data.currently;

		console.log(`
		Summary: ${weather.summary}
		Temperature: ${((Number(weather.temperature) - 32) * (5 / 9)).toFixed(1)},
		Wind Speed: ${weather.windSpeed}, 
		Humidity: ${weather.humidity},
		`)

		})
		.catch(error => console.error(`ERROR ${error}`));
}
