const headers: HeadersInit = {
  'X-API-Key': process.env.REACT_APP_ALERTS_API_KEY as string
}
const API_ALERTS= new URL(process.env.REACT_APP_API_ALERTS as string);
export type dataType = { states: Array<alertType>, last_update: string };
export type alertType = {
  id: number,
  name: string,
  name_en: string,
  alert: boolean,
  changed: string,
};

const getAllRegions = async (): Promise<dataType> => {
  try {
    const request: Response = await fetch(API_ALERTS  , {
      headers
    });
    const requestRegions: dataType = await request.json();
    return requestRegions;
  } catch (error) {
    console.log('[API]: fetchAllRegions Error:' + error);
    throw new Error('Failed to fetch all regions');
  }
};

export default getAllRegions;
