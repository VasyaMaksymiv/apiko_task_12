const { config } = require('dotenv');
const getGoogleLocation = require('./getGoogleLocation');
const getDarkSky = require('./getDarkSky');

config();

const { GOOGLE_GEOCODING_API_KEY, DARK_SKY_API_KEY} = process.env;
const sity = process.argv[2] || 'Ternopil'

getGoogleLocation(
	GOOGLE_GEOCODING_API_KEY, 
	sity, 
	(locationData) => {

		 const location = locationData.geometry.location;
				
		getDarkSky(DARK_SKY_API_KEY, location);
});