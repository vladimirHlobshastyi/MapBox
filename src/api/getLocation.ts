const REACT_APP_MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const API_LOCATION = (lat: number, lng: number) =>
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?types=region&limit=1&access_token=${REACT_APP_MAPBOX_TOKEN}`;

export const getLocation = async (lat: number, lng: number) => {
  try {
    const request: Response = await fetch(API_LOCATION(lat, lng), {
      method: 'GET',
    });
    const region = await request.json();

    return region;
  } catch (error) {
    console.log('[API]: getLocation Error:' + error);
    throw new Error('Failed to fetch getLocation');
  }
};
