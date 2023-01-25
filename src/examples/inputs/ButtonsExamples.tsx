import styled from "styled-components";
import { ExampleBloc } from "../../components/ExampleBloc";
import { Button, PageTransition, Title } from "../../lib";

export function ButtonsExample() {
  return (
    <>
      <ExampleBloc title="Buttons">
        <>
          <Wrapper>
            <Title label="Small" level={3} />
            <ButtonWrapper>
              <Button
                size="small"
                buttonType="primary"
                label="Primary Button"
              />
              <Button
                size="small"
                buttonType="secondary"
                label="Secondary Button"
              />
              <Button size="small" buttonType="danger" label="Danger Button" />
              <Button size="small" buttonType="modify" label="Modify Button" />
              <Button
                size="small"
                buttonType="default"
                label="Default Button"
              />
            </ButtonWrapper>
          </Wrapper>
          <Wrapper>
            <Title label="Medium" level={3} />
            <ButtonWrapper>
              <Button
                size="medium"
                buttonType="primary"
                label="Primary Button"
              />
              <Button
                size="medium"
                buttonType="secondary"
                label="Secondary Button"
              />
              <Button size="medium" buttonType="danger" label="Danger Button" />
              <Button size="medium" buttonType="modify" label="Modify Button" />
              <Button
                size="medium"
                buttonType="default"
                label="Default Button"
              />
            </ButtonWrapper>
          </Wrapper>
          <Wrapper>
            <Title label="Large" level={3} />
            <ButtonWrapper>
              <Button
                size="large"
                buttonType="primary"
                label="Primary Button"
              />
              <Button
                size="large"
                buttonType="secondary"
                label="Secondary Button"
              />
              <Button size="large" buttonType="danger" label="Danger Button" />
              <Button size="large" buttonType="modify" label="Modify Button" />
              <Button
                size="large"
                buttonType="default"
                label="Default Button"
              />
            </ButtonWrapper>
          </Wrapper>
        </>
        <>Bonjour</>
      </ExampleBloc>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-around;
  margin-top: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-around;
`;
