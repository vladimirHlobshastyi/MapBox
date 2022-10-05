import { InfoForDate } from './Info.types';
import unitPng from './png/unit.png';
import tankPng from './png/tank.png';
import armouredPng from './png/armoured_fighting_vehicles.png';
import artillery_systemsPng from './png/artillery_systems.png';
import mlrsPng from './png/otrk.png';
import aa_warfare_systemsPng from './png/aa_warfare_systems.png';
import planesPng from './png/airplane.png';
import helicoptersPng from './png/helicopter.png';
import vehicles_fuel_tanksPng from './png/vehicles_fuel_tanks.png';
import warships_cuttersPng from './png/warships_cutters.png';
import cruise_missilesPng from './png/ cruise_missiles.png';
import uav_systemsPng from './png/uav_systems.png';
import special_military_equipPng from './png/special_military_equip.png';
import atgm_srbm_systemsPng from './png/rszo.png';

export const InfoDate: InfoForDate = {
  personnel_units: {
    ua: 'особового складу',
    en: 'personnel units',
    png: unitPng,
  },
  tanks: { ua: 'танків', en: 'tanks', png: tankPng },
  armoured_fighting_vehicles: {
    ua: 'броньованих машин',
    en: 'armoured fighting vehicles',
    png: armouredPng,
  },
  artillery_systems: {
    ua: 'артилерії',
    en: 'artillery systems',
    png: artillery_systemsPng,
  },
  mlrs: { ua: 'рсзв', en: 'mlrs', png: mlrsPng },
  aa_warfare_systems: {
    ua: 'засоби ппо',
    en: 'anti-aircraft warfare sts.',
    png: aa_warfare_systemsPng,
  },
  planes: { ua: 'літаків', en: 'planes', png: planesPng },
  helicopters: { ua: 'гелікоптерів', en: 'helicopters', png: helicoptersPng },
  vehicles_fuel_tanks: {
    ua: 'автоцистерни',
    en: 'vehicles fuel tanks',
    png: vehicles_fuel_tanksPng,
  },
  warships_cutters: {
    ua: 'кораблі/катери',
    en: 'warships cutters',
    png: warships_cuttersPng,
  },
  cruise_missiles: {
    ua: 'крилаті ракети',
    en: 'cruise missiles',
    png: cruise_missilesPng,
  },
  uav_systems: {
    ua: 'бпла',
    en: 'uav systems',
    png: uav_systemsPng,
  },
  special_military_equip: {
    ua: 'спец. техніки',
    en: 'special military equip',
    png: special_military_equipPng,
  },
  atgm_srbm_systems: {
    ua: 'установок отрк/трк',
    en: 'atgm/srbm systems',
    png: atgm_srbm_systemsPng,
  },
};
