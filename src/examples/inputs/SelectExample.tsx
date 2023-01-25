import styled from "styled-components";
import { ExampleBloc } from "../../components/ExampleBloc";
import { Select } from "../../lib";

export function SelectExample() {
  return (
    <>
      <ExampleBloc title="Select">
        <SelectWrapper>
          <Select
            placeholder="basic select"
            options={[
              {
                label: "option 1",
                value: "option 1",
              },
              {
                label: "option 2",
                value: "option 2",
              },
              {
                label: "option 3",
                value: "option 3",
              },
            ]}
          />
        </SelectWrapper>
        <>Bonjour</>
      </ExampleBloc>
    </>
  );
}

const SelectWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  align-items: flex-end;
`;
