import { RefObject } from 'react';

export type ButtonPropsTypes = {
  refProp?: RefObject<HTMLDivElement | null> | undefined,
  date: string,
};
