import * as htmlToImage from 'html-to-image';
import { RefObject, useCallback } from 'react';
import actualDate from '../utils/actualDate/actualDate';

const useScreenshot = (
  myRef: undefined | RefObject<HTMLDivElement | null>,
  date: string) =>
  useCallback(() => {
    if (myRef?.current === null || !myRef) {
      return;
    }

<<<<<<< HEAD
    htmlToImage.toJpeg(myRef.current, { cacheBust: true })
=======

    toSvg(myRef.current, { cacheBust: true })
>>>>>>> 36a2c5d6bd291f2fdfc4b7d0b90e7b637abd1419
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `Карта повітряних тривог на ` + actualDate(date, true);
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [myRef]);

export default useScreenshot;
