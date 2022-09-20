import React, { createContext, useState, useEffect } from 'react';
import { getLatestStatistik } from '../api/getLatestStatistik';
import { StatistikDataType, StatistiProviderPropTypes } from './StatistikProvider.types';



export const StatistikContext = createContext({} as StatistikDataType);


const StatistikProvider = ({ children }: StatistiProviderPropTypes) => {
  const [lossesІtatistik, setLossesІtatistik] = useState<StatistikDataType>({}as StatistikDataType);
  const [errorMessage, setErrorMessage] = useState<string>('');


  const getStatistik = async () => { 
    try {
      if (errorMessage) {
        setErrorMessage('');
      }
      const response = await getLatestStatistik();
     
      if (response.message==="The data were fetched successfully.") {
        const res = response.data
        setLossesІtatistik(res);
            
      }


    } catch (err) { if (err instanceof Error) {
   
      setErrorMessage(err.message);
    } else {
      console.log('Unexpected error', err);
    }

    }
  };

  useEffect(() => {
    getStatistik()
  }, []);

  return (
    <StatistikContext.Provider
      value={{...lossesІtatistik}}
    >
      {children}
    </StatistikContext.Provider>
  );
};

export default StatistikProvider;
