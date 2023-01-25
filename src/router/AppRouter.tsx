import { Routes, Route } from "react-router";
import { Home } from "../components/Home";
import { CardExample } from "../examples/data-display/CardExample";
import { CarouselExample } from "../examples/data-display/CarouselExample";
import { ModalExample } from "../examples/data-display/ModalExample";
import { TitleExample } from "../examples/data-display/TitleExample";
import { ButtonsExample } from "../examples/inputs/ButtonsExamples";
import { InputExample } from "../examples/inputs/InputExample";
import { SelectExample } from "../examples/inputs/SelectExample";
import { BurgerMenuExample } from "../examples/menu/BurgerMenuExample";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inputs/buttons" element={<ButtonsExample />} />
      <Route path="/inputs/input" element={<InputExample />} />
      <Route path="/inputs/select" element={<SelectExample />} />
      <Route path="/menus/burgermenu" element={<BurgerMenuExample />} />
      <Route path="/datadisplay/card" element={<CardExample />} />
      <Route path="/datadisplay/title" element={<TitleExample />} />
      <Route path="/datadisplay/carousel" element={<CarouselExample />} />
      <Route path="/datadisplay/modal" element={<ModalExample />} />
    </Routes>
  );
}
