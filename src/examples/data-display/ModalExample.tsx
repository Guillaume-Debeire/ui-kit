import { useState } from "react";
import styled from "styled-components";
import { ExampleBloc } from "../../components/ExampleBloc";
import { Button, Input, Title } from "../../lib";
import { Modal } from "../../lib/components/data-display/Modal";

export function ModalExample() {
  const [placeholder, setPlaceholder] = useState("");
  const [label, setLabel] = useState("");
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <>
      <ExampleBloc title="Modal">
        <>
          <ModalWrapper>
            <Button
              buttonType="secondary"
              label="Show Modal"
              onClick={() => setModalVisibility(!modalVisibility)}
            />
            <Modal
              isVisible={modalVisibility}
              onClickClose={() => setModalVisibility(false)}
            >
              <>
                <Title label="Example Modal" level={3} />
              </>
            </Modal>
            <Button
              buttonType="secondary"
              label="Show Modal"
              onClick={() => setModalVisibility(!modalVisibility)}
            />
          </ModalWrapper>
        </>
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

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin: 0 1rem;
`;

const Documentation = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
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
  align-items: center;
  width: 100%;
`;
