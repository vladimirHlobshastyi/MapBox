import React, { createContext, useState, useEffect } from 'react';
import { getLatestStatistik } from '../api/getLatestStatistik';
import { StatistikDataType, StatistiProviderPropTypes } from './StatistikProvider.types';

export const StatistikContext = createContext({} as StatistikDataType);

const StatistikProvider = ({ children }: StatistiProviderPropTypes) => {
  const [lossesStatistics, setLossesStatistics] = useState<StatistikDataType>({}as StatistikDataType);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [statsArray, setStatsArray] = useState<[string, number][]>([]as [string, number][]);

  const getStatistik = async () => { 
    try {
      if (errorMessage) {
        setErrorMessage('');
      }
      const response = await getLatestStatistik();
     
      if (response.message==="The data were fetched successfully.") {
        const res = response.data
       setLossesStatistics(res);
            
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

  useEffect(() => {
    if(lossesStatistics.stats){
    let {stats} = lossesStatistics
        let test =  Object.entries(stats) 
        setStatsArray(test)
       
 
     
  }
  }, [lossesStatistics]);

  return (
    <StatistikContext.Provider
      value={{...lossesStatistics,statsArray}}
    >
      {children}
    </StatistikContext.Provider>
  );
};

export default StatistikProvider;
