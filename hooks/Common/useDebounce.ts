import { useEffect, useCallback, DependencyList } from "react";

/**
 * Debounce Function.
 * @constructor
 * @param {any} effect - Effect of Debounce
 * @param {DependencyList} dependencies - Dependencies of Effect
 * @param {number} delay - Delay of timer
 * @abstract
 * useDebounce(
    () => {
      setSearch(debounceSearch);
    },
    [debounceSearch], 
    800,
  );
 */

export default function useDebounce(
  effect: any,
  dependencies: DependencyList,
  delay: number,
): void {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}
