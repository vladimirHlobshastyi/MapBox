import { useEffect, useRef } from 'react';

const useInterval = (
  callback: () => void,
  isActive: boolean,
) => {
  const savedCallback = useRef<() => void>();

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