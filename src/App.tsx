import React from 'react';
import { Routes, Route } from "react-router-dom";
import PaginaInicio from "./pages/home/HomePage";
import PaginaFavoritos from "./pages/favorites/Favoritos.pagina";
import PaginaDetalhe from "./pages/details/Detalhe.pagina";
import Cabecalho from "./components/layout/cabecalho.componente";

function App() {
  return (
    <div className="App bg-background">
      <Cabecalho />
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="favoritos" element={<PaginaFavoritos />} />
        <Route path="/detalhe/:id" element={<PaginaDetalhe />} />
      </Routes>
    </div>
  );
}

export default App;
