import { toJpeg } from 'html-to-image';
import { RefObject, useCallback } from 'react';
import actualDate from '../utils/actualDate/actualDate';

const useScreenshot = (
  myRef: undefined | RefObject<HTMLDivElement | null>,
  date: string 
) =>
  useCallback(() => {
    if (myRef?.current === null || !myRef) {
      return;
    }

    toJpeg(myRef.current, { cacheBust: false })
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
