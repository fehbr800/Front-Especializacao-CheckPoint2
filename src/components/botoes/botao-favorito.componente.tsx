import React from "react";
import iconsBlack from "../../assets/iconsblack.svg";
import iconsColor from "../../assets/icons8-bookmark (1).svg";
import { useDispatch } from "react-redux";
import { FavoritesAction, fillChars, removeChars } from "../../data/store/actions/favoritosReducerAction";

interface BotaoFavoritoProps {
  isFavorito: boolean;
  characterId: number;
  name: string;
  status: string;
  species: string;
  origin: string;
  onFavoriteClick: () => void;
}

const BotaoFavorito = ({
  isFavorito,
  characterId,
  name,
  status,
  species,
  origin,
  onFavoriteClick,
}: BotaoFavoritoProps) => {
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    const action: FavoritesAction = isFavorito
      ? removeChars(characterId)
      : fillChars([{ id: characterId, name, status, species, origin: origin || "" } as any]);
    dispatch(action);
    onFavoriteClick(); // Chama o manipulador de clique externo
  };

  const src = isFavorito ? iconsBlack : iconsColor;

  return (
    <button className="botao-favorito" onClick={handleFavoriteClick}>
      <img src={src} alt="favorito" />
    </button>
  );
};

export default BotaoFavorito;
