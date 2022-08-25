import { geojsonType } from './geojsonData';
import OccupiedDonetskP2 from './OccupiedDonetskP2.json';
import OccupiedKharkiv from './OccupiedKharkiv.json';
import OccupiedKherson from './OccupiedKherson.json';
import OccupiedLugansk from './OccupiedLugansk.json';
import OccupiedZaporizhyia from './OccupiedZaporizyia.json';
import Crimea from './Crimea.json';
import Sevastopol from './Sevastopol.json';

const occupiedRegions: Array<geojsonType> = [
  OccupiedDonetskP2,
  OccupiedKharkiv,
  OccupiedKherson,
  OccupiedLugansk,
  OccupiedZaporizhyia,
  Crimea,
  Sevastopol,
];

export default occupiedRegions;
