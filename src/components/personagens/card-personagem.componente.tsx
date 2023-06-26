import { Link } from "react-router-dom";
import BotaoFavorito from "../botoes/botao-favorito.componente";

interface ICardPersonagemProps {
  id: number;
  imageUrl: string;
  name: string;
  status: string;
  species: string;
  origin: string;
}

const CardPersonagem = ({
  id,
  imageUrl,
  name,
  status,
  species,
  origin
}: ICardPersonagemProps) => {
  return (
    <div className="rounded-lg shadow-md flex m-2 bg-card bg-opacity-20">
      <Link to={`/detalhe/${id}`}>
        <img src={imageUrl} className="w-40 rounded-s" alt="" />
      </Link>

      <div className="m-2">
        <h2 className="text-xl font-custom text-secundary">
          <Link
            to={`/detalhe/${id}`}
            className="hover:text-color2 text-secundary"
          >
            {name}
          </Link>
        </h2>

        <div className="flex items-center">
          <div
            className={`w-2 h-2 rounded-full ${
              status === "Alive" ? "bg-green-500" : "bg-red-500"
            } mr-1`}
          />
          <p className="text-gray-500"> {status}</p>
        </div>
        <p className="text-gray-500">Species: {species}</p>
        <span className="text-gray-400">Last known location:</span>
        <p className="text-gray-500">{origin}</p>
      </div>
      <BotaoFavorito isFavorito={false} onClick={() => null} />
    </div>
  );
};

export default CardPersonagem;
