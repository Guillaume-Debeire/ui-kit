import styled from "styled-components";

export interface TitleProps {
  label: string;
  level?: number;
}

export function Title(props: TitleProps) {
  if (props.level) {
    if (props.level === 1) {
      return <Level1Title {...props}>{props.label}</Level1Title>;
    } else if (props.level === 2) {
      return <Level2Title {...props}>{props.label}</Level2Title>;
    } else if (props.level === 3) {
      return <Level3Title {...props}>{props.label}</Level3Title>;
    } else if (props.level === 4) {
      return <Level4Title {...props}>{props.label}</Level4Title>;
    } else if (props.level === 5) {
      return <Level5Title {...props}>{props.label}</Level5Title>;
    } else if (props.level === 6) {
      return <Level6Title {...props}>{props.label}</Level6Title>;
    }
  } else {
    return <Level1Title {...props}>{props.label}</Level1Title>;
  }
  return <Level1Title {...props}>{props.label}</Level1Title>;
}

const Level1Title = styled.h1<TitleProps>`
  font-size: 32px;
`;

const Level2Title = styled.h2<TitleProps>`
  font-size: 26px;
`;

const Level3Title = styled.h3<TitleProps>`
  font-size: 22px;
`;

const Level4Title = styled.h4<TitleProps>`
  font-size: 20px;
`;

const Level5Title = styled.h5<TitleProps>`
  font-size: 19px;
`;

const Level6Title = styled.h6<TitleProps>`
  font-size: 18px;
`;
