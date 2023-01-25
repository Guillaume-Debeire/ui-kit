import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { BurgerMenu } from "./lib/components/menu/BurgerMenu";
import { AppRouter } from "./router/AppRouter";

function App() {
  console.log("e", process.env);
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <AppVersion>Ui-kit v{process.env.REACT_APP_VERSION}</AppVersion>
          <BurgerMenu
            width={300}
            options={[
              {
                label: "Accueil",
                to: "/",
              },
              {
                label: "Inputs",
                subOptions: [
                  {
                    label: "Buttons",
                    to: "/inputs/buttons",
                  },
                  {
                    label: "Input",
                    to: "/inputs/input",
                  },
                  {
                    label: "Select",
                    to: "/inputs/select",
                  },
                ],
              },
              {
                label: "Menus",
                subOptions: [
                  {
                    label: "Burger Menu",
                    to: "/menus/burgermenu",
                  },
                ],
              },
              {
                label: "Data Display",
                subOptions: [
                  {
                    label: "Card",
                    to: "/datadisplay/card",
                  },
                  {
                    label: "Title",
                    to: "/datadisplay/title",
                  },
                  {
                    label: "Carousel",
                    to: "/datadisplay/carousel",
                  },
                  {
                    label: "Modal",
                    to: "/datadisplay/modal",
                  },
                ],
              },
            ]}
          />
          <AppRouter />
        </BrowserRouter>
      </header>
    </div>
  );
}
const AppVersion = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
`;

export default App;
