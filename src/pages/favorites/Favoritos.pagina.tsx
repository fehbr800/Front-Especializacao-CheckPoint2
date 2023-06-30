import React from "react";
import { useSelector } from "react-redux";
import CardPersonagem from "../../components/personagens/card-personagem.componente";
import { IRootState } from "../../data/store";

const PaginaFavoritos = () => {
  const favorites = useSelector((state: IRootState) => state.favoritesReducer);

  if (!Array.isArray(favorites)) {
    return <div className="text-cyan-50">No favorites found.</div>;
  }

  return (
    <div className="h-full w-auto">
      <h1>Meus Favoritos</h1>
      {favorites.map((favorite) => (
        <CardPersonagem
        
          key={favorite.id}
          id={favorite.id}
          imageUrl={favorite.image}
          name={favorite.name}
          status={favorite.status}
          species={favorite.species}
          origin={favorite.origin.name}
        />
      ))}
    </div>
  );
};

export default PaginaFavoritos;
