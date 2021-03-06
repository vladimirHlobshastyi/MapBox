import React, { createContext, useEffect, useState } from "react";
import getAllRegions from "../api/getAllRegions";

export const EventsContext = createContext();

const regionsDataMoc = {
  data: [
    {
      id: 1,
      name: "Вінницька область",
      name_en: "Vinnytsia oblast",
      alert: false,
      changed: "2022-06-23T09:31:53+03:00",
    },
    {
      id: 2,
      name: "Волинська область",
      name_en: "Volyn oblast",
      alert: false,
      changed: "2022-06-23T09:32:35+03:00",
    },
    {
      id: 3,
      name: "Дніпропетровська область",
      name_en: "Dnipropetrovsk oblast",
      alert: false,
      changed: "2022-06-23T12:38:16+03:00",
    },
    {
      id: 4,
      name: "Донецька область",
      name_en: "Donetsk oblast",
      alert: false,
      changed: "2022-06-23T13:25:32+03:00",
    },
    {
      id: 5,
      name: "Житомирська область",
      name_en: "Zhytomyr oblast",
      alert: false,
      changed: "2022-06-23T09:32:26+03:00",
    },
    {
      id: 6,
      name: "Закарпатська область",
      name_en: "Zakarpattia oblast",
      alert: false,
      changed: "2022-06-23T09:34:37+03:00",
    },
    {
      id: 7,
      name: "Запорізька область",
      name_en: "Zaporizhzhia oblast",
      alert: false,
      changed: "2022-06-23T12:39:19+03:00",
    },
    {
      id: 8,
      name: "Івано-Франківська область",
      name_en: "Ivano-Frankivsk oblast",
      alert: false,
      changed: "2022-06-23T09:32:53+03:00",
    },
    {
      id: 9,
      name: "Київська область",
      name_en: "Kyiv oblast",
      alert: false,
      changed: "2022-06-23T09:32:25+03:00",
    },
    {
      id: 10,
      name: "Кіровоградська область",
      name_en: "Kirovohrad oblast",
      alert: false,
      changed: "2022-06-23T13:22:00+03:00",
    },
    {
      id: 11,
      name: "Луганська область",
      name_en: "Luhansk oblast",
      alert: true,
      changed: "2022-04-04T19:45:39+03:00",
    },
    {
      id: 12,
      name: "Львівська область",
      name_en: "Lviv oblast",
      alert: false,
      changed: "2022-06-23T09:35:52+03:00",
    },
    {
      id: 13,
      name: "Миколаївська область",
      name_en: "Mykolaiv oblast",
      alert: false,
      changed: "2022-06-23T12:56:24+03:00",
    },
    {
      id: 14,
      name: "Одеська область",
      name_en: "Odesa oblast",
      alert: false,
      changed: "2022-06-23T12:40:57+03:00",
    },
    {
      id: 15,
      name: "Полтавська область",
      name_en: "Poltava oblast",
      alert: false,
      changed: "2022-06-23T12:38:54+03:00",
    },
    {
      id: 16,
      name: "Рівненська область",
      name_en: "Rivne oblast",
      alert: false,
      changed: "2022-06-23T09:33:58+03:00",
    },
    {
      id: 17,
      name: "Сумська область",
      name_en: "Sumy oblast",
      alert: false,
      changed: "2022-06-23T12:41:58+03:00",
    },
    {
      id: 18,
      name: "Тернопільська область",
      name_en: "Ternopil oblast",
      alert: false,
      changed: "2022-06-23T09:37:08+03:00",
    },
    {
      id: 19,
      name: "Харківська область",
      name_en: "Kharkiv oblast",
      alert: false,
      changed: "2022-06-23T12:37:56+03:00",
    },
    {
      id: 20,
      name: "Херсонська область",
      name_en: "Kherson oblast",
      alert: false,
      changed: "2022-04-15T00:43:33+03:00",
    },
    {
      id: 21,
      name: "Хмельницька область",
      name_en: "Khmelnytskyi oblast",
      alert: false,
      changed: "2022-06-23T09:32:38+03:00",
    },
    {
      id: 22,
      name: "Черкаська область",
      name_en: "Cherkasy oblast",
      alert: false,
      changed: "2022-06-23T13:21:19+03:00",
    },
    {
      id: 23,
      name: "Чернівецька область",
      name_en: "Chernivtsi oblast",
      alert: false,
      changed: "2022-06-23T09:33:52+03:00",
    },
    {
      id: 24,
      name: "Чернігівська область",
      name_en: "Chernihiv oblast",
      alert: false,
      changed: "2022-06-23T09:33:44+03:00",
    },
    {
      id: 25,
      name: "м. Київ",
      name_en: "Kyiv",
      alert: false,
      changed: "2022-06-23T09:32:25+03:00",
    },
  ],
  onChange: new Date(),
};
const AlertProvider = ({ children }) => {
  const [regionsData, setRegionsData] = useState(regionsDataMoc);

  const getAlertRegions = async () => {
    const data = await getAllRegions();
  
    return setRegionsData({ data, onChange: new Date() });
  };

  useEffect(() => {
    getAlertRegions();
    setInterval(() => {
      return getAlertRegions();
    }, 10000);
  }, []);

  return (
    <EventsContext.Provider value={regionsData}>
      {children}
    </EventsContext.Provider>
  );
};

export default AlertProvider;
