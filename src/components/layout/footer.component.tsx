import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <nav className="text-white">
          <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
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
        <p className="text-white text-center sm:text-left mt-4 sm:mt-0">
          © {new Date().getFullYear()} Nome da sua empresa. Todos os direitos reservados.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center mt-2">
        <p className="text-white">Membros do Grupo:</p>
        <ul className="flex flex-row ml-2 space-x-2">
          <li>
            <a
              href="https://github.com/membro1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-color1 transition-colors duration-300"
            >
              Membro 1
            </a>
          </li>
          <li>
            <a
              href="https://github.com/membro2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-color1 transition-colors duration-300"
            >
              Membro 2
            </a>
          </li>
          <li>
            <a
              href="https://github.com/membro3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-color1 transition-colors duration-300"
            >
              Membro 3
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
