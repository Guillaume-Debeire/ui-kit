import { useEffect, useState } from "react";
import styled from "styled-components";
import { Title } from "./Title";
import { CheckCircle } from "@styled-icons/bootstrap/CheckCircle";
import { ErrorWarning } from "@styled-icons/remix-line/ErrorWarning";
import { CloseCircle } from "@styled-icons/ionicons-outline/CloseCircle";

export interface NotificationProps {
  title?: string;
  message?: string;
  visible?: boolean;
  notificationType?: NotificationTypeType;
  onClick?: () => void;
}

export type NotificationTypeType = "default" | "success" | "danger" | "warning";

export function Notification(props: NotificationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (props.visible) {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
  }, [props.visible]);

  return (
    <StyledNotification
      className={`notification ${isVisible ? "visible" : ""}`}
      onClick={props.onClick ? props.onClick : () => setIsVisible(false)}
      {...props}
    >
      {props.notificationType && (
        <IconWrapper className="notification-icon">
          {props.notificationType === "success" && (
            <CheckCircle color="rgba(0, 186, 32, 0.8)" />
          )}
          {props.notificationType === "danger" && (
            <CloseCircle color="rgba(185, 0, 0, 0.8)" />
          )}
          {props.notificationType === "warning" && (
            <ErrorWarning color="rgba(185, 126, 0, 0.8)" />
          )}
        </IconWrapper>
      )}

      {props.title && <Title label={props.title} level={4} />}
      {props.message && props.message}
    </StyledNotification>
  );
}

const StyledNotification = styled.div<NotificationProps>`
  position: absolute;
  top: 60px;
  right: 60px;
  transition: all 0.4s cubic-bezier(0, 0.84, 0.28, 1.11);
  width: 300px;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(30px);
  box-shadow: 1px 2px 16px 1px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 5px;
  transform: translateX(200px);
  overflow: hidden;
  filter: blur(1px);
  opacity: 0;
  border: 2px solid
    ${(props) => {
      if (props.notificationType === "success") {
        return "rgba(0, 186, 32, 0.8)";
      } else if (props.notificationType === "danger") {
        return "rgba(185, 0, 0, 0.8)";
      } else if (props.notificationType === "warning") {
        return "rgba(185, 126, 0, 0.8)";
      } else if (props.notificationType === "default") {
        return "rgba(0, 0, 0, 0.45);";
      } else {
        return "transparent";
      }
    }};
  cursor: pointer;

  & .notification-icon {
    transition: all 0.2s ease-in-out;
    width: ${(props) => (props.visible ? "30px" : "30px")};
  }
  &.visible {
    transform: translateX(0px);
    filter: blur(0px);
    opacity: 1;
  }
  &:hover {
    background-color: white;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.5rem;
  transform: all 0.5s ease-in-out;
`;
