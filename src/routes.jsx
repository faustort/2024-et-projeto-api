import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./layout/Body";
import Inicial from "./pages/Inicial";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Inicial />}></Route>
          <Route path="about" element={<h1>About</h1>}></Route>
          <Route path="contact" element={<h1>Contact</h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
