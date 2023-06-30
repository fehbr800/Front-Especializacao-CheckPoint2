// pagina-favoritos.componente.tsx

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../../data/store";
import {
  FavoritesAction,
  fillChars,
  removeChars,
  
} from "../../data/store/actions/favoritosReducerAction";
import CardPersonagem from "../../components/personagens/card-personagem.componente";
import { loadFavorites } from "../../data/store/reducers/favoritesReducer";

const PaginaFavoritos = () => {
  const favorites = useSelector((state: IRootState) => state.favoritesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // Carregue os favoritos do armazenamento ao montar o componente
    const loadedFavorites = loadFavorites();
    dispatch(fillChars(loadedFavorites));
  }, [dispatch]);

  const handleFavoriteAction = (action: FavoritesAction) => {
    dispatch(action);
  };

  return (
    <div>
      <h1>Meus Favoritos</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {favorites.map((character) => (
          <CardPersonagem
            key={character.id}
            id={character.id}
            imageUrl={character.image}
            name={character.name}
            status={character.status}
            species={character.species}
            origin={character.origin.name}
            onFavoriteClick={() => handleFavoriteAction(removeChars(character.id))}
          />
        ))}
      </div>
    </div>
  );
};

export default PaginaFavoritos;
