import BotaoFavorito from "../botoes/botao-favorito.componente";

/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns Elemento JSX
 */

interface ICardPersonagemProps {
  imageUrl: string;
  name: string;
  status: string;
  species: string;
  origin: string;
}

const CardPersonagem = ({
  imageUrl,
  name,
  status,
  species,
  origin
}: ICardPersonagemProps) => {
  return (
    <div className="rounded-lg shadow-md flex m-2 bg-card">
      <img src={imageUrl} className="w-40 rounded-s" alt="" />
      <div className="m-2">
        <h2 className="text-xl font-custom text-secundary">{name}</h2>
        <div className="flex items-center">
          <div
            className={`w-2 h-2 rounded-full ${
              status === "Alive" ? "bg-green-500" : "bg-red-500"
            } mr-1`}
          ></div>
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
