import { useState } from "react";
import styled from "styled-components";
import { ExampleBloc } from "../../components/ExampleBloc";
import { Input } from "../../lib";

export function InputExample() {
  const [placeholder, setPlaceholder] = useState("");
  const [label, setLabel] = useState("");
  return (
    <>
      <ExampleBloc title="Input">
        <InputsWrapper>
          <Input placeholder="basic input" />
          <Input placeholder="input with label" label="label" />
        </InputsWrapper>
        <>
          <Documentation>
            <DocumentationExample>
              <Input placeholder={placeholder} label={label} />
            </DocumentationExample>
            <DocumentationControls>
              <Control>
                <Input
                  label="placeholder"
                  inputValue={placeholder}
                  onChange={(e) => setPlaceholder(e.target.value)}
                />
              </Control>
              <Control>
                <Input
                  label="label"
                  inputValue={label}
                  onChange={(e) => setLabel(e.target.value)}
                />
              </Control>
            </DocumentationControls>
          </Documentation>
        </>
      </ExampleBloc>
    </>
  );
}

const InputsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  align-items: flex-end;
`;

const Documentation = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
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
`;

const Control = styled.div`
  display: flex;
  flex-direction: row;
  align-items: c;
  width: 100%;
`;
