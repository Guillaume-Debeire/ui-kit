import styled from "styled-components";
import { ExampleBloc } from "../../components/ExampleBloc";
import { Button, Card, Input, Title } from "../../lib";

export function TitleExample() {
  return (
    <div className="vue">
      <ExampleBloc title="Card">
        <>
          <TitleWrapper>
            <Title label="Level 1 title" level={1} />
            <Title label="Level 2 title" level={2} />
            <Title label="Level 3 title" level={3} />
            <Title label="Level 4 title" level={4} />
            <Title label="Level 5 title" level={5} />
            <Title label="Level 6 title" level={6} />
            <Title label="default Title" />
          </TitleWrapper>
        </>
        <>Bonjour</>
      </ExampleBloc>
    </div>
  );
}

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;
