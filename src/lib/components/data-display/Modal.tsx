import styled from "styled-components";

export interface ModalProps {
  children: JSX.Element;
  isVisible: boolean;
  onClickClose?: () => void;
}

export function Modal(props: ModalProps) {
  return (
    <StyledModal
      {...props}
      className={`modal ${props.isVisible ? "visible" : "invisible"}`}
    >
      <>
        <ButtonCloseModal onClick={props.onClickClose}>X</ButtonCloseModal>
        {props.children}
      </>
    </StyledModal>
  );
}
const StyledModal = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  width: 500px;
  height: 300px;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 1px 2px 15px 1px rgba(0, 0, 0, 0.2);
  z-index: 2000;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(30px);
  transition: transform 0.2s ease-in-out;
  &.visible {
    transform: scale(1);
    filter: blur(0px);
  }
  &.invisible {
    transform: scale(0);
    filter: blur(10px);
  }
`;

const ButtonCloseModal = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
`;
