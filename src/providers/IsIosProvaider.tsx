import React, { createContext, useEffect, useState } from 'react';
import { ChildrenPropTypes } from './AlertProvider.types';
import { isIosProviderTypes } from './IsIosProviderTypes';

export const IsIosEventsContext = createContext({} as isIosProviderTypes);

const IsIosProvider = ({ children }:ChildrenPropTypes) => {
    const [isIosState,setIsIosState]= useState(false)
    const ua = window.navigator.userAgent;
    const isIos = !!ua.match(/iPhone/i) || !!ua.match(/iPad/i);
    useEffect(()=>{if (isIos){return setIsIosState(true)}},[isIos])

    return (
        <IsIosEventsContext.Provider
          value={{isIosProviderProp:isIosState}}
        >
          {children}
        </IsIosEventsContext.Provider>
      );   
};

export default IsIosProvider;
