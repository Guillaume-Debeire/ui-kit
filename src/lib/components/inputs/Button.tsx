import styled from "styled-components";

export interface ButtonProps {
  label?: string;
  buttonType?: ButtonTypeType;
  placeholder?: string;
  size?: ButtonSizeType;
  onClick?: () => void;
}

export type ButtonTypeType =
  | "primary"
  | "secondary"
  | "danger"
  | "modify"
  | "default";

export type ButtonSizeType = "small" | "medium" | "large";

export function Button(props: ButtonProps) {
  return (
    <StyledButton placeholder={props.placeholder} {...props}>
      {props.label || "Valider"}
    </StyledButton>
  );
}

const StyledButton = styled.button<ButtonProps>`
  border: 2px solid
    ${(props) => {
      if (props.buttonType === "primary") {
        return "rgba(0, 186, 32, 0.8)";
      } else if (props.buttonType === "secondary") {
        return "rgba(0, 186, 32, 0.8)";
      } else if (props.buttonType === "danger") {
        return "rgba(185, 0, 0, 0.8)";
      } else if (props.buttonType === "modify") {
        return "rgba(185, 126, 0, 0.8)";
      } else if (props.buttonType === "default") {
        return "rgba(0, 0, 0, 0.45);";
      } else {
        return "rgba(0, 0, 0, 0.45)";
      }
    }};
  background-color: ${(props) => {
    if (props.buttonType === "primary") {
      return "rgba(0, 186, 32, 0.8)";
    } else if (props.buttonType === "secondary") {
      return "transparent";
    } else if (props.buttonType === "danger") {
      return "rgba(185, 0, 0, 0.8)";
    } else if (props.buttonType === "modify") {
      return "rgba(185, 126, 0, 0.8)";
    } else {
      return "transparent";
    }
  }};
  color: ${(props) => {
    if (
      props.buttonType === "primary" ||
      props.buttonType === "danger" ||
      props.buttonType === "modify"
    ) {
      return "white";
    } else if (props.buttonType === "secondary") {
      return "rgba(0, 186, 32, 0.8)";
    } else if (props.buttonType === "default") {
      return "rgba(0, 0, 0, 0.45);";
    }
  }};
  font-size: ${(props) => {
    if (props.size === "small") {
      return "13px";
    } else if (props.size === "medium") {
      return "15px";
    } else if (props.size === "large") {
      return "18px";
    } else {
      return "15px";
    }
  }};
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => {
      if (props.buttonType === "primary") {
        return "rgba(0, 186, 32, 0.8)";
      } else if (props.buttonType === "secondary") {
        return "rgba(0, 186, 32, 0.8)";
      } else if (props.buttonType === "danger") {
        return "rgba(185, 0, 0, 0.8)";
      } else if (props.buttonType === "modify") {
        return "rgba(185, 126, 0, 0.8)";
      } else if (props.buttonType === "default") {
        return "rgba(0, 0, 0, 0.45);";
      } else {
        return "rgba(0, 0, 0, 0.45);";
      }
    }};
    color: white;
    ${(props) => {
      if (
        props.buttonType === "primary" ||
        props.buttonType === "danger" ||
        props.buttonType === "modify"
      ) {
        return "filter: brightness(1.2)";
      } else return "";
    }}
  }
  &:active {
    filter: ${(props) => {
      if (
        props.buttonType === "primary" ||
        props.buttonType === "danger" ||
        props.buttonType === "modify"
      ) {
        return "brightness(1);";
      } else if (
        props.buttonType === "secondary" ||
        props.buttonType === "default"
      ) {
        return "brightness(1.2);";
      } else {
        return "brightness(1.2);";
      }
    }};
  }
`;
