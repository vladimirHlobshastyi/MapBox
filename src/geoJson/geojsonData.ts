import CherkasyJson from './Cherkasy.json';
import ChernihivJson from './Chernihiv.json';
import ChernivtsiJson from './Chernivtsi.json';
import CrimeaJson from './Crimea.json';
import DnipropetrovskJson from './Dnipropetrovsk.json';
import KhersonJson from './Kherson.json';
import KharkivJson from './Kharkiv.json';
import IvanoFrankivskJson from './Ivano-Frankivsk.json';
import DonetskJson from './Donetsk.json';
import LvivJson from './Lviv.json';
import LuhanskJson from './Luhansk.json';
import KyivCityJson from './KyivCity.json';
import KyivJson from './Kyiv.json';
import KirovohradJson from './Kirovohrad.json';
import KhmelnytskyiJson from './Khmelnytskyi.json';
import RivneJson from './Rivne.json';
import PoltavaJson from './Poltava.json';
import OdessaJson from './Odessa.json';
import MykolaivJson from './Mykolaiv.json';
import ZakarpattiaJson from './Zakarpattia.json';
import VolynJson from './Volyn.json';
import VinnytsiaJson from './Vinnytsia.json';
import TernopilJson from './Ternopil.json';
import SumyJson from './Sumy.json';
import SevastopolJson from './Sevastopol.json';
import ZaporizhiaJson from './Zaporizhia.json';
import ZhytomyrJson from './Zhytomyr.json';

export type geojsonType = {
  type: string,
  geometry: {
    coordinates: number[][][] | number[][][][],

    type: string,
  },
  properties: {
    shapeName: string,
    Level: string,
    shapeISO: string,
    shapeID: string,
    shapeGroup: string,
    shapeType: string,
  },
};

const geojsonData: Array<geojsonType> = [
  CrimeaJson,
  VinnytsiaJson,
  VolynJson,
  DnipropetrovskJson,
  DonetskJson,
  ZhytomyrJson,
  ZakarpattiaJson,
  ZaporizhiaJson,
  IvanoFrankivskJson,
  KyivJson,
  KirovohradJson,
  LuhanskJson,
  LvivJson,
  MykolaivJson,
  OdessaJson,
  PoltavaJson,
  RivneJson,
  SumyJson,
  TernopilJson,
  KharkivJson,
  KhersonJson,
  KhmelnytskyiJson,
  CherkasyJson,
  ChernihivJson,
  ChernivtsiJson,
  KyivCityJson,
  SevastopolJson,
];

export default geojsonData;
