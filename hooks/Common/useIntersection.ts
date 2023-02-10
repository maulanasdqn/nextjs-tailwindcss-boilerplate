import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (options: IntersectionObserverInit | undefined): any[] => {
  const containerRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  const callbackFunction = (entries: IntersectionObserverEntry[]): void => {
    const [entry] = entries;
    setVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const cleanContainer = containerRef.current;
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (cleanContainer) observer.unobserve(cleanContainer);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

export default useIntersectionObserver;
