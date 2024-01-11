import { useEffect } from "react";

const useTimerEffect = (callback, delay) => {
  useEffect(() => {
    const timer = setTimeout(callback, delay);

    return () => clearTimeout(timer); // Clear the timer if the component is unmounted
  }, [callback, delay]);
};

export default useTimerEffect;
