import { useState } from "react";
import styled from "styled-components";
import { ExampleBloc } from "../../components/ExampleBloc";
import {
  Button,
  ButtonSizeType,
  ButtonTypeType,
  Input,
  Select,
  Title,
} from "../../lib";

export function ButtonsExample() {
  const [label, setLabel] = useState("");
  const [buttonType, setButtonType] = useState<ButtonTypeType>("primary");
  const [size, setSize] = useState<ButtonSizeType>("medium");
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
        <>
          <Documentation>
            <DocumentationExample>
              <Button buttonType={buttonType} label={label} size={size} />
            </DocumentationExample>
            <DocumentationControls>
              <Control>
                <Input
                  label="Label"
                  inputValue={label}
                  onChange={(e) => setLabel(e.target.value)}
                />
              </Control>
              <Control>
                <Select
                  placeholder="Button Type"
                  options={[
                    {
                      label: "primary",
                      value: "primary",
                    },
                    {
                      label: "secondary",
                      value: "secondary",
                    },
                    {
                      label: "danger",
                      value: "danger",
                    },
                    {
                      label: "modify",
                      value: "modify",
                    },
                    {
                      label: "default",
                      value: "default",
                    },
                  ]}
                  onChange={(e: any) => {
                    console.log("e", e);
                  }}
                />
              </Control>
              <Control>
                <Select
                  placeholder="Size"
                  options={[
                    {
                      label: "small",
                      value: "small",
                    },
                    {
                      label: "medium",
                      value: "medium",
                    },
                    {
                      label: "large",
                      value: "large",
                    },
                  ]}
                  onChange={(e) => setSize(e.target.value)}
                />
              </Control>
            </DocumentationControls>
          </Documentation>
        </>
        <>
          <PropsList>
            <p>label? : string</p>
            <p>
              buttonType?: "primary" | "secondary" | "danger" | "modify" |
              "default"
            </p>
            <p>placeholder?: string</p>
            <p>size?: "small" | "medium" | "large"</p>
            <p>onClick?: () =&gt; void</p>
          </PropsList>
        </>
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

const Documentation = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const PropsList = styled.div`
  display: flex;

  flex-direction: column;
  align-items: flex-start;
`;

const DocumentationExample = styled.div`
  width: 45%;
  border-right: 1px solid lightgrey;
`;

const DocumentationControls = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  align-items: center;
  gap: 1rem;
`;

const Control = styled.div`
  display: flex;
  flex-direction: row;
  align-items: c;
  width: 100%;
`;
