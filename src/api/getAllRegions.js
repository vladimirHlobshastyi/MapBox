const API_KEY = process.env.REACT_APP_ALERTS_API_KEY;

const getAllRegions = async () => {
  try {
    // move https://alerts.com.ua/api to env variables
    const request = await fetch("https://alerts.com.ua/api/states", {
      headers: {
        "X-API-Key": API_KEY,
      },
    });
    const requestRegions = await request.json();
    return requestRegions;
  } catch (error) {
    console.log("[API]: fetchAllRegions Error:" + error);
    throw new Error('Failed to fetch all regions');
  }
};

export default getAllRegions;
