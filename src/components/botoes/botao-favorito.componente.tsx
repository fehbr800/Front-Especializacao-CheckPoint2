import "./botao-favorito.css";
import filled from "../../assets/starfilled.svg";
import notfilled from "../../assets/starnotfilled.svg";

interface BotaoFavoritoProps {
  isFavorito: boolean;
  onClick: (arg: boolean) => void;
}

const BotaoFavorito = ({ isFavorito, onClick }: BotaoFavoritoProps) => {
  const src = isFavorito ? filled : notfilled;

  return (
    <button type="button" onClick={() => onClick(!isFavorito)}>
      <div className="botao-favorito">
        <img src={src} alt={"favorito"} />
      </div>
    </button>
  );
};

export default BotaoFavorito;
