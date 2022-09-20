export type StatistikProviderContextTypes = {
  data: StatistikDataType,
  message: string,
};
export type StatistikDataType = {
  date: string,
  day: number,
  resource: string,
  stats: StatistikProps,
  increase: StatistikProps,
};

export type StatistiProviderPropTypes = {
  children?: JSX.Element | JSX.Element[],
};

export type StatistikProps = {
  humans: number,
  tanks: number,
  armoredCars: number,
  artillerySystem: number,
  antiAircraft: number,
  aircraft: number,
  uav: number,
  cruiseMissles: number,
  warship: number,
  car: number,
  specialEquipment: number,
};

export type statistikData =
  | 'personnel_units'
  | 'tanks'
  | 'armoured_fighting_vehicles'
  | 'artillery_systems'
  | 'mlrs'
  | 'aa_warfare_systems'
  | 'planes'
  | 'helicopters'
  | 'vehicles_fuel_tanks'
  | 'warships_cutters'
  | 'cruise_missiles'
  | 'uav_systems'
  | 'special_military_equip'
  | 'atgm_srbm_systems';
