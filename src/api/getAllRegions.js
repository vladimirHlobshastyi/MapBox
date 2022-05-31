const API_KEY = process.env.REACT_APP_ALERTS_API_KEY;
const getAllRegions = async () => {
  try {
    const request = await fetch("https://alerts.com.ua/api/states", {
      headers: {
        "X-API-Key": API_KEY,
      },
    });
    const requestRegions = await request.json();
    return requestRegions.states;
  } catch (err) {
    console.log("error = " + err);
  }
};

export default getAllRegions;
