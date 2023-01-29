import styled from "styled-components";

export interface InputProps {
  label?: string;
  placeholder?: string;
  onClick?: () => void;
  onChange?: (e: any) => void;
  inputValue?: string | undefined;
}

export function Input(props: InputProps) {
  return (
    <Wrapper className="input-wrapper">
      {props.label && <Label className="input-label">{props.label}</Label>}
      <StyledInput
        defaultValue={props.inputValue}
        className="input"
        placeholder={props.placeholder}
        onChange={props.onChange}
        {...props}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 0.2 ease-in-out;
  &:focus-within {
    & .input-label {
      font-weight: 600;
    }
  }
`;
const StyledInput = styled.input`
  border: 2px solid rgba(0, 71, 112, 0.333);
  outline: none;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  font-size: 15px;

  &:hover {
    border: 2px solid rgba(0, 36, 57, 0.543);
  }
  &:focus {
    border: 2px solid rgba(0, 36, 57, 0.543);
  }
`;

const Label = styled.label`
  font-size: 16px;
`;
