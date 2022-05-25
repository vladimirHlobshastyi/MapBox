import apiKeyHeaders from "./apiKeyHeaders";

const getAllRegions = async (setIsClosed, setRegionsData) => {
  const request = await fetch("https://alerts.com.ua/api/states", {
    headers: apiKeyHeaders,
  });
  const requestRegions = await request.json();
  setIsClosed(false);

  return setRegionsData(requestRegions.states);
};

export default getAllRegions;
