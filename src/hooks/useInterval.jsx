import { useEffect, useRef } from 'react';

const useInterval = (callback, isActive) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current?.();
    }

    if (isActive) {
      const id = setInterval(tick, 1000);
      return () => clearInterval(id);
    }
  }, [isActive]);
};
export default useInterval;