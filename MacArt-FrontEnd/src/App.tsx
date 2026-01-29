import { Routes, Route, BrowserRouter } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Aboult from "./pages/About"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"
import Home from "./pages/Home"
import Order from "./pages/Order"
import Products from "./pages/Products"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/produtos" element={<Layout><Products /></Layout>} />
        <Route path="/sobre" element={<Layout><Aboult /></Layout>} />
        <Route path="/galeria" element={<Layout><Gallery /></Layout>} />
        <Route path="/contato" element={<Layout><Contact /></Layout>} />
        <Route path="/pedido" element={<Layout><Order /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App