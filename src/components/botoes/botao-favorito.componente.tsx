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
  
>
  <div className="botao-favorito">
    <img src={src} alt="favorito" className=" w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20" />
  </div>
</button>

  );
  
  
};

export default BotaoFavorito;
