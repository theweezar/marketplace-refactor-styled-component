import { useEffect } from "react";

/**
 * Trigger handler function if user click or touch outside component
 * @param {React.MutableRefObject<any>} ref Component Ref
 * @param {function} handler Handler function
 */
export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    console.log(ref.current.offsetLeft);
  }, [ref, handler]);
};