import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { Nav } from "./components/Nav/Nav"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./context/CartContext/CartProvider"
import { Cart } from "./components/Cart/Cart"
import { MainLayout } from "./layouts/MainLayout"
import { Footer } from "./components/Footer/Footer"
import { AdminLayout } from "./layouts/AdminLayout"
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida"
import { ProductFormContainer } from "./components/AdminComponents/ProductFormContainer/ProductFormContainer"
import { Login } from "./components/Login/Login"
import { Home } from "./components/Home/Home"

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Nav />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/nosotros" element={<h2>🚧 Página en construcción 🚧</h2>} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/contacto" element={<h2>🚧 Página en construcción 🚧</h2>} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="*" element={<h2>Página no encontrada 😢</h2>} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Login />} />

            <Route
              path="alta-productos"
              element={
                <RutaProtegida>
                  <ProductFormContainer />
                </RutaProtegida>
              }
            />
          </Route>
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
