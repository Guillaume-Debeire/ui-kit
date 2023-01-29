import { useState } from "react";
import styled from "styled-components";
// import OutsideAlerter from "../../hooks/useClickOutside";
import { Input } from "./Input";

export interface SelectProps {
  defaultValue?: string;
  placeholder?: string;
  options?: OptionsType[];
  onChange?: (e: any) => void;
}

export interface OptionsType {
  label: string;
  value: string;
}

export function Select(props: SelectProps) {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [value, setValue] = useState("");

  function handleClick(value: string) {
    setValue(value);
    setOptionsOpen(false);
  }

  return (
    <>
      <SelectWrapper className="select-wrapper">
        <SelectInput
          inputValue={value}
          placeholder={props.placeholder}
          onClick={() => setOptionsOpen(!optionsOpen)}
          onChange={props.onChange}
        />
        {props.options && optionsOpen && (
          <Options className="select-options">
            {props.options.map((option) => (
              <Option>{option.label}</Option>
            ))}
          </Options>
        )}
        {value !== "" && <Clear onClick={() => setValue("")}>x</Clear>}
      </SelectWrapper>
      <select>
        <option>bonjour</option>
        <option>bonjour</option>
        <option>bonjour</option>
        <option>bonjour</option>
      </select>
    </>
  );
}

const SelectWrapper = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
`;

const SelectInput = styled(Input)`
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

const Options = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 2.5rem;
  background: linear-gradient(rgba(0, 127, 201, 0.089), transparent);
  backdrop-filter: blur(100px);
  width: 100%;
  border-radius: 5px;
  padding: 0.2rem;
  box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  z-index: 1000;
`;

const Option = styled.div`
  border-radius: 5px;
  padding: 0.3rem 0;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: rgba(108, 179, 220, 0.653);
  }
`;

const Clear = styled.button`
  display: flex;
  color: black;
  position: absolute;
  right: 0;
  top: 8px;
  border: none;
  background-color: lightgrey;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #9e9e9e;
    color: white;
  }
`;
