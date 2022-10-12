export type StatisticDataType = {
  date: string,
  day: number,
  resource: string,
  stats: StatisticProps,
  increase: StatisticProps,
  statsData: statsDataTypes,
};

export type StatisticProps = {
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

export type statisticData =
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

export type statsDataTypes = {
  stats: [string, number][],
  increase: [string, number][],
};
