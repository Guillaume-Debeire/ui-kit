import { useEffect, useState } from "react";
import styled from "styled-components";

export interface PageTransitionProps {
  children: JSX.Element;
}

export function PageTransition(props: PageTransitionProps) {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
  }, []);
  return (
    <AnimatedTransition className={`animation ${animation ? "open" : "close"}`}>
      {props.children}
    </AnimatedTransition>
  );
}

const AnimatedTransition = styled.div`
  width: 100%;
  transition: all 0.2s ease-in-out;
  &.close {
    transform: translateY(5px);
    filter: opacity(0.5);
  }
  &.open {
    transform: translateY(0px);
    filter: opacity(1);
  }
`;
