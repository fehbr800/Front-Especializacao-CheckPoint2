import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row justify-center items-center">
     
        <p className="text-white text-center sm:text-left mt-4 sm:mt-0">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center mt-2">
        <p className="text-white">Membros do Grupo:</p>
        <ul className="flex flex-row ml-2 space-x-2">
          <li>
            <a
              href="https://github.com/fehbr800"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-color1 transition-colors duration-300"
            >
              Matheus Emanoel
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vitinop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-color1 transition-colors duration-300"
            >
             Victor Luz
            </a>
          </li>
          <li>
            <a
              href="https://github.com/DylanTokumoto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-color1 transition-colors duration-300"
            >
              Dylan Tokumoto
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
