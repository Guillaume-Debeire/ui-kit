import styled from "styled-components";

export interface CardProps {
  children?: JSX.Element;
  width?: number;
  height?: number;
}

export function Card(props: CardProps) {
  return <StyledCard {...props}>{props.children && props.children}</StyledCard>;
}

const StyledCard = styled.div<CardProps>`
  width: ${(props) =>
    props.width && props.width > 200 && props.width < 600
      ? `${props.width}px`
      : "fit-content"};
  height: ${(props) =>
    props.height && props.height > 200 && props.height < 600
      ? `${props.height}px`
      : "fit-content"};
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(30px);
  border-radius: 5px;
  box-shadow: 1px 2px 18px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  padding: 1rem;
  &:focus-within {
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 1px 2px 18px 3px rgba(0, 0, 0, 0.2);
  }
`;
