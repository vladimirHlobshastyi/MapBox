export type InfoDateTypes = {
    personnel_units: { ua: 'особового складу', en: 'personnel units' },
    tanks: { ua: 'танків', en: 'tanks' },
    armoured_fighting_vehicles: {
      ua: 'бойових броньованих машин',
      en: 'armoured fighting vehicles',
    },
    artillery_systems: {
      ua: 'артилерійських систем/рсзв',
      en: '  artillery systems',
    },
    mlrs: { ua: 'рсзв', en: 'mlrs' },
    aa_warfare_systems: { ua: 'засоби ппо', en: 'anti-aircraft warfare systems' },
    planes: { ua: 'літаків', en: 'planes' },
    helicopters: { ua: 'гелікоптерів', en: 'helicopters' },
    vehicles_fuel_tanks: {
      ua: 'автотехніки та автоцистерн',
      en: 'vehicles fuel tanks',
    },
    warships_cutters: { ua: 'кораблі/катери', en: 'warships cutters' },
    cruise_missiles: { ua: 'крилаті ракети', en: 'cruise missiles' },
    uav_systems: { ua: 'бпла оперативно-тактичного рівня', en: 'uav systems' },
    special_military_equip: { ua: 'спец. техніки', en: 'special military equip' },
    atgm_srbm_systems: { ua: 'установок отрк/трк', en: 'atgm/srbm systems' },
  };
  
  export type InfoForDate = {
    [key: string]: {
      [key: string]: string,
    },
  };