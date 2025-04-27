import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./componentes/Layout";
import PaginaInicial from "./paginas/PaginaInicial";
import NovaPublicacao from "./paginas/NovaPublicacao";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PaginaInicial />} />
          <Route path="nova-publicacao" element={<NovaPublicacao />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
