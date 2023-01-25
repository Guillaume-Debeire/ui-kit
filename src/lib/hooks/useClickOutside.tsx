import React, { useRef, useEffect, Ref } from "react";

export interface useOutsideAlerterProps {
  ref: any;
}

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref: any) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        alert("click outside");
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", () => handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", () => handleClickOutside);
    };
  }, [ref]);
}

export interface outsideAlerterProps {
  children: JSX.Element;
}
/**
 * Component that alerts if you click outside of it
 */
export default function OutsideAlerter(props: any) {
  const wrapperRef: any = useRef(null);
  useOutsideAlerter(wrapperRef);

  return <div ref={wrapperRef}>{props.children}</div>;
}
