import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MarketplacePage from "./pages/MarketplacePage";
import SkinDetailPage from "./pages/SkinDetailPage";
import NavbarComponent from "./components/NavbarComponent";

function App() {

  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/skin/:id" element={<SkinDetailPage />} />
      </Routes>
    </>
  )
}

export default App
