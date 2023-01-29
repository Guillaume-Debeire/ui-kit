import { useState } from "react";
import styled from "styled-components";
import { ExampleBloc } from "../../components/ExampleBloc";
import { Button, Notification } from "../../lib";

export function NotificationExample() {
  const [isVibibleDefault, setIsVisibleDefault] = useState(false);
  const [isVibibleSuccess, setIsVisibleSuccess] = useState(false);
  const [isVibibleDanger, setIsVisibleDanger] = useState(false);
  const [isVibibleWarning, setIsVisibleWarning] = useState(false);
  return (
    <div className="vue">
      <ExampleBloc title="Notification">
        <ExampleWrapper>
          <Button
            label="Default Notification"
            buttonType="default"
            onClick={() => setIsVisibleDefault(!isVibibleDefault)}
          />
          <Notification
            title={"Default Notification"}
            message={"Ceci est un exemple de notification par défaut"}
            visible={isVibibleDefault}
          />

          <Button
            label="Success Notification"
            buttonType="primary"
            onClick={() => setIsVisibleSuccess(!isVibibleSuccess)}
          />
          <Notification
            title={"Exemple de notification"}
            message={"Ceci est un exemple de notification"}
            visible={isVibibleSuccess}
            notificationType="success"
          />

          <Button
            label="danger Notification"
            buttonType="danger"
            onClick={() => setIsVisibleDanger(!isVibibleDanger)}
          />
          <Notification
            title={"Exemple de notification"}
            message={"Ceci est un exemple de notification"}
            visible={isVibibleDanger}
            notificationType="danger"
          />

          <Button
            label="warning Notification"
            buttonType="modify"
            onClick={() => setIsVisibleWarning(!isVibibleWarning)}
          />
          <Notification
            title={"Exemple de notification"}
            message={"Ceci est un exemple de notification"}
            visible={isVibibleWarning}
            notificationType="warning"
          />
        </ExampleWrapper>
        <>Bonjour</>
      </ExampleBloc>
    </div>
  );
}

const ExampleWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin-top: 1rem;
`;
