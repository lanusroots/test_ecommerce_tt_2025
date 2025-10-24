import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext/CartProvider";

function App() {
  return (
    <BrowserRouter>
        <CartProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/nosotros" element={<h2>🚧 Página en construcción 🚧</h2>} />
            <Route path="/productos" element={<h2>🚧 Página en construcción 🚧</h2>} />
            <Route path="/contacto" element={<h2>🚧 Página en construcción 🚧</h2>} />
            <Route path="*" element={<h2>Página no encontrada 😢</h2>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
  );
}

export default App;
