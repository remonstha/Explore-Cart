import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./componentes/Header";
import Home from "./componentes/Home";
import Cart from "./componentes/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
