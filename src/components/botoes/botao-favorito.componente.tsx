import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../data/store/actions/favoriteReducerAction";
import { IChars } from "../../data/dto/IChar";
import FavoriteColor from "../../assets/iconsColorFavorite.svg";
import Favorite from "../../assets/iconFavorite.svg";

interface BotaoFavoritoProps {
  isFavorito: boolean;
  character: IChars; // Objeto completo do personagem
  onClick: () => void;
}



const BotaoFavorito = ({ isFavorito, character, onClick }: BotaoFavoritoProps) => {
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    if (isFavorito) {
      // Remove from favorites
      dispatch(removeFavorite(character.id)); // Pass the character ID to removeFavorite
    } else {
      // Add to favorites
      dispatch(addFavorite(character)); // Pass the character object to addFavorite
    }

    onClick(); // Call the onClick callback if needed
  };

  const favorito = isFavorito ? Favorite : FavoriteColor;

  return (
    <div className="botao-favorito" onClick={handleFavoriteClick}>
      <img src={favorito} alt={"favorito"} />
    </div>
  );
};

export default BotaoFavorito;
