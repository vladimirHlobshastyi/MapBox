const getRegions = async () => {
  const request = await fetch("https://alerts.com.ua/api/states", {
    headers: apiKeyHeaders,
  });
  const requesRegions = await request.json();
  setIsClosed(false);
  console.log(requesRegions.states);
  return setRegionsData(requesRegions.states);
};

export default getRegions;
