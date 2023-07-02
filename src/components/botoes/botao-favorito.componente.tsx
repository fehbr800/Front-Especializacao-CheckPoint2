import filled from "../../assets/starfilled.svg";
import notfilled from "../../assets/starnotfilled.svg";

interface BotaoFavoritoProps {
  isFavorito: boolean;
  onClick: (arg: boolean) => void;
}

const BotaoFavorito = ({ isFavorito, onClick }: BotaoFavoritoProps) => {
  const src = isFavorito ? filled : notfilled;

  return (
    <button
      type="button"
      onClick={() => onClick(!isFavorito)}
      className=" text-white font-bold py-2 px-4 rounded-full"
    >
      <div className="botao-favorito">
        <img src={src} alt="favorito" className="w-8 h-8" />
      </div>
    </button>
  );
  
  
};

export default BotaoFavorito;
