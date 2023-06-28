import { Link } from "react-router-dom";
import { useState } from "react";

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center ">
          <h1 className="font-custom text-center animate-gradient text-5xl">
            <Link to="/">Rick And Morty</Link>
          </h1>
          <nav className="text-white">
            <ul className="hidden sm:flex space-x-4">
              <li>
                <Link
                  to="/"
                  className="hover:text-color1 text-secundary transition-colors duration-300"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/favoritos"
                  className="hover:text-color1 text-secundary transition-colors duration-300"
                >
                  Favoritos
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex sm:hidden flex-row-reverse mt-4 relative">
            <button
              className="flex items-center px-3 py-2 rounded text-white bg-gray-700 hover:bg-gray-600 focus:outline-none transition-colors duration-100"
              onClick={toggleMenu}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 9a2 2 0 012-2h10a2 2 0 110 4H5a2 2 0 01-2-2zm0 4a2 2 0 100 4h10a2 2 0 100-4H3zm2 3a1 1 0 100 2h6a1 1 0 100-2H5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {menuAberto && (
              <ul className="absolute top-7 right-0 mt-2 py-2 bg-gray-900 rounded shadow-lg text-white">
                <li>
                  <Link
                    to="/"
                    className="block px-4 py-2 hover:text-color1 transition-colors duration-300"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/favoritos"
                    className="block px-4 py-2 hover:text-color1 transition-colors duration-300"
                  >
                    Favoritos
                  </Link>
                </li>
              
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Cabecalho;
