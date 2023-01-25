import styled from "styled-components";
import { ExampleBloc } from "../../components/ExampleBloc";
import { Button, Card, Input, Title } from "../../lib";

export function CardExample() {
  return (
    <div className="vue">
      <ExampleBloc title="Card">
        <>
          <CardWrapper>
            <Card>
              <CardContent>
                <Title label="Form Card" />
                <Input placeholder="email" />
                <Input placeholder="Mot de passe" />
                <Button buttonType="primary" label="Valider" />
              </CardContent>
            </Card>
            <Card>
              <>Default Card</>
            </Card>
          </CardWrapper>
        </>
        <>Bonjour</>
      </ExampleBloc>
    </div>
  );
}

const CardWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  align-items: flex-end;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
