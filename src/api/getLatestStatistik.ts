
  const API_ALERTS= new URL(process.env.REACT_APP_API_STATISTIK as string);

 export const getLatestStatistik = async () => {
    try {
      const request: Response = await fetch( API_ALERTS,{method:'GET'} );
     
      return await request.json()
    } catch (error) {
      console.log('[API]: fetchAllRegions Error:' + error);
      throw new Error('Failed to fetch latest statistik');
    }
  };
  

  