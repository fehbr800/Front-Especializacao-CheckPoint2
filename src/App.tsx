import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import PaginaInicio from "./pages/home/HomePage";
import PaginaFavoritos from "./pages/favorites/Favoritos.pagina";
import PaginaDetalhe from "./pages/details/Detalhe.pagina";
import Cabecalho from "./components/layout/cabecalho.componente";

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="favoritos" element={<PaginaFavoritos />} />
        <Route path="detalhe" element={<PaginaDetalhe />} />
      </Routes>
    </div>
  );
}

export default App;
