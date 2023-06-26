import "./botao-favorito.css";

interface BotaoFavoritoProps {
  isFavorito: boolean;
  onClick: () => void;
}

const BotaoFavorito = ({ isFavorito, onClick }: BotaoFavoritoProps) => {
  const src = isFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";

  return (
    <div className="botao-favorito">
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default BotaoFavorito;
