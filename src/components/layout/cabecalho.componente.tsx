import { Link } from "react-router-dom";

/**
 * Cabeçalho que contém os links para navegar entre as páginas
 *
 * Uso: `<Cabecalho />`
 *
 * @returns {JSX.Element}
 */
const Cabecalho = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-8 items-center">
          <h1 className="font-custom text-center animate-gradient text-5xl">
           Rick And Morty
          </h1>
          <nav className="text-white">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-color1 text-secundary">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/favoritos"
                  className="hover:text-color1 text-secundary"
                >
                  Favoritos
                </Link>
              </li>
              <li>
                <Link
                  to="/detalhe"
                  className="hover:text-color1 text-secundary"
                >
                  Detalhe
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Cabecalho;
