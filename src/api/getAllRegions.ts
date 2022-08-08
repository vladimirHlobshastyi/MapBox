const API_KEY: any = process.env.REACT_APP_ALERTS_API_KEY;
const API_ALERTS: any = process.env.REACT_APP_API_ALERTS;

export type dataType = { states: Array<alertType>, last_update: string };
export type alertType = {
  id: number,
  name: string,
  name_en: string,
  alert: boolean,
  changed: string,
};

const getAllRegions = async () => {
  try {
    const request: any = await fetch(API_ALERTS, {
      headers: {
        'X-API-Key': API_KEY,
      },
    });
    const requestRegions: dataType = await request.json();
    return requestRegions;
  } catch (error) {
    console.log('[API]: fetchAllRegions Error:' + error);
    throw new Error('Failed to fetch all regions');
  }
};

export default getAllRegions;
