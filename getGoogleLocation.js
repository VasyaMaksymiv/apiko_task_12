const fetch = require('node-fetch');
const googleLocationURL = 'https://maps.googleapis.com/maps/api/geocode/json';

module.exports = getGoogleLocation = async (key, city, calback) => {
	await fetch(`${googleLocationURL}?address=${city}&key=${key}`)
		.then(response => response.json())
		.then(data => {
			calback(data.results[0]);
		})
		.catch(error => console.error(`ERROR ${error}`));
};

