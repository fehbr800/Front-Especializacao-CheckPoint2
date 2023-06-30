import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import BotaoFavorito from "../botoes/botao-favorito.componente";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../data/store";
import {
  FavoritesAction,
  fillChars,
  removeChars,
} from "../../data/store/actions/favoritosReducerAction";

interface ICardPersonagemProps {
  id: number;
  imageUrl: string;
  name: string;
  status: string;
  species: string;
  origin: string;
  onFavoriteClick: () => void; // Adicione esta linha
}

const CardPersonagem = ({
  id,
  imageUrl,
  name,
  status,
  species,
  origin,
}: ICardPersonagemProps) => {
  const favorites = useSelector((state: IRootState) => state.favoritesReducer);
  const dispatch = useDispatch();

  const handleFavoriteAction = (action: FavoritesAction) => {
    dispatch(action);
  };

  const isFavorito = favorites.some((fav) => fav.id === id);

  const isDataLoaded = imageUrl && name && status && species && origin;

  const action = isFavorito
    ? removeChars(id)
    : fillChars([{ id, name, status, species, origin: origin || "" } as any]);

  useEffect(() => {
    return () => {
      clearTimeout(3000);
    };
  }, []);

  return (
    <div className="rounded-lg shadow-md flex m-2 bg-card bg-opacity-20">
      <Link to={`/detalhe/${id}`}>
        {isDataLoaded ? (
          <img src={imageUrl} className="w-40 rounded-s" alt="" />
        ) : (
          <Skeleton width={160} height={240} className="w-40 rounded-s" />
        )}
      </Link>

      <div className="m-2">
        <h2 className="text-xl font-custom text-secundary">
          <Link
            to={`/detalhe/${id}`}
            className={`hover:text-color2 ${
              isDataLoaded ? "text-secundary" : "text-transparent"
            }`}
          >
            {isDataLoaded ? name : <Skeleton width={120} height={24} />}
          </Link>
        </h2>

        <div className="flex items-center">
          {isDataLoaded ? (
            <div
              className={`w-2 h-2 rounded-full ${
                status === "Alive" ? "bg-green-500" : "bg-red-500"
              } mr-1`}
            />
          ) : (
            <Skeleton
              width={12}
              height={12}
              className="w-2 h-2 rounded-full bg-gray-300 mr-1"
            />
          )}
          <p
            className={`${isDataLoaded ? "text-gray-500" : "text-transparent"}`}
          >
            {isDataLoaded ? status : <Skeleton width={60} height={16} />}
          </p>
        </div>
        <p className={`${isDataLoaded ? "text-gray-500" : "text-transparent"}`}>
          {isDataLoaded ? (
            `Species: ${species}`
          ) : (
            <Skeleton width={100} height={16} />
          )}
        </p>
        <span className="text-gray-400">Last known location:</span>
        <p className={`${isDataLoaded ? "text-gray-500" : "text-transparent"}`}>
          {isDataLoaded ? (
            origin?.trim() || ""
          ) : (
            <Skeleton width={120} height={16} />
          )}
        </p>
      </div>

      <BotaoFavorito
        onFavoriteClick={() => handleFavoriteAction(action)}
        isFavorito={isFavorito}
        characterId={id}
        name={name}
        status={status}
        species={species}
        origin={origin}
      />
    </div>
  );
};

export default CardPersonagem;
