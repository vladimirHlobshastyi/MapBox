const headers = {
  'X-API-Key': process.env.REACT_APP_ALERTS_API_KEY || '',
};

export const fetchAlerts = async () => {
  try {
    const request = await fetch(process.env.REACT_APP_API_ALERTS || '', {
      headers,
    });

    return await request.json();
  } catch (error) {
    console.log('[API]: fetchAllRegions Error:' + error);
    throw new Error('Failed to fetch all regions');
  }
};
