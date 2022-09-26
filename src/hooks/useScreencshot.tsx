import { toJpeg } from 'html-to-image';
import { RefObject, useCallback } from 'react';

const useScreenshot = (
  myRef: undefined | RefObject<HTMLDivElement | null>,
  isStatistic: boolean
) =>
  useCallback(() => {
    if (myRef?.current === null || !myRef) {
      return;
    }

    toJpeg(myRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = isStatistic
          ? 'Статистика втрат'
          : 'Карта повітряних тривог';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [myRef]);

export default useScreenshot;
