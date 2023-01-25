import styled from "styled-components";
import { ExampleBloc } from "../../components/ExampleBloc";
import { BurgerMenu } from "../../lib";

export function BurgerMenuExample() {
  return (
    <div className="vue">
      <ExampleBlocBurgerMenu title="Burger Menu">
        <BurgerMenu />
        <>Bonjour</>
      </ExampleBlocBurgerMenu>
    </div>
  );
}

const ExampleBlocBurgerMenu = styled(ExampleBloc)`
  overflow: hidden;
`;
