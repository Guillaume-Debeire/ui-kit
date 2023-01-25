import styled from "styled-components";
import { Carousel, PageTransition, Title } from "../lib";

export interface ExampleBlocProps {
  children?: JSX.Element[];
  title?: string;
}

export function ExampleBloc(props: ExampleBlocProps) {
  return (
    <PageTransition>
      <Carousel>
        <Wrapper>
          <Title level={2} label={props.title ? props.title : "Example Bloc"} />
          {props.children && props.children[0]}
        </Wrapper>
        <Wrapper>
          <Title level={2} label="Controls" />
          {props.children && props.children[1]}
        </Wrapper>
      </Carousel>
    </PageTransition>
  );
}

const Wrapper = styled.div`
  background: white;
  padding: 3rem 2rem;
  border-radius: 10px;
  margin: 1rem auto;
  width: 80%;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;
`;
