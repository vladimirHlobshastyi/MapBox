import { Alert } from '../commonTypes/alert';

export type AlertProviderContextTypes = {
  alerts: Array<Alert>,
  lastUpdate: string ,
  isLoading: boolean,
  errorMessage: string,
  timerValue: number,
};


export type AlertProviderPropTypes = {
  children?: JSX.Element | JSX.Element[],
};
