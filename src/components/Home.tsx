import styled from "styled-components";
import { Title } from "../lib";

export function Home() {
  return (
    <div className="vue">
      <Title level={1} label={`Ui-kit v${process.env.REACT_APP_VERSION}`} />
      <DocumentationDescription>
        Bienvenue dans la documentation de l'Ui-kit.
      </DocumentationDescription>
    </div>
  );
}

const DocumentationDescription = styled.p``;
