import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PaginaInicio from "./pages/home/HomePage";
import PaginaFavoritos from "./pages/favorites/Favoritos.pagina";
import PaginaDetalhe from "./pages/details/Detalhe.pagina";
import Cabecalho from "./components/layout/cabecalho.componente";
import Footer from "./components/layout/footer.component";
import Pagina404 from "./pages/404/404";
import { useDispatch } from "react-redux";
import { useSelector } from "./data/store";
import { fillChars } from "./data/store/actions/charReducerActions";

function App() {
  const dispatch = useDispatch();
  const { charReducer: chars } = useSelector(({ charReducer }) => ({
    charReducer
  }));

  useEffect(() => {
    if (chars.cached.length === 0) {
      fillChars(dispatch);
    }
  }, []);

  if (chars.cached.length > 0) {
    return (
      <div className="App bg-background">
        <Cabecalho />
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="favoritos" element={<PaginaFavoritos />} />
          <Route path="detalhe/:id" element={<PaginaDetalhe />} />
          <Route path="404-NotFound" element={<Pagina404 />} />
          <Route path="*" element={<Navigate to="404-NotFound" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
  else {
    return(<h1>Loading</h1>)
  }
}

export default App;
