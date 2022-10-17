import { Alert } from '../commonTypes/alert';

export type AlertProviderContextTypes = {
  alerts: Array<Alert>,
  lastUpdate: string,
  isLoading: boolean,
  errorMessage: string,
  timerValue: number,
  updateAlerts: () => void,
};

export type ChildrenPropTypes = {
  children?: JSX.Element | JSX.Element[],
};
