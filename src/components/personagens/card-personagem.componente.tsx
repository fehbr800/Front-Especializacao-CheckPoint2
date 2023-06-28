import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import BotaoFavorito from "../botoes/botao-favorito.componente";

interface ICardPersonagemProps {
  id: number;
  imageUrl: string;
  name: string;
  status: string;
  species: string;
  origin: string;
}

const CardPersonagem = ({
  id,
  imageUrl,
  name,
  status,
  species,
  origin
}: ICardPersonagemProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando o carregamento dos dados
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Defina o tempo de atraso desejado em milissegundos

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="rounded-lg shadow-md flex m-2 bg-card bg-opacity-20">
      <Link to={`/detalhe/${id}`}>
        {loading ? (
          <Skeleton width={160} height={240} className="w-40 rounded-s" />
        ) : (
          <img src={imageUrl} className="w-40 rounded-s" alt="" />
        )}
      </Link>

      <div className="m-2">
        <h2 className="text-xl font-custom text-secundary">
          <Link
            to={`/detalhe/${id}`}
            className={`hover:text-color2 ${loading ? "text-transparent" : "text-secundary"}`}
          >
            {loading ? <Skeleton width={120} height={24} /> : name}
          </Link>
        </h2>

        <div className="flex items-center">
          {loading ? (
            <Skeleton width={12} height={12} className="w-2 h-2 rounded-full bg-gray-300 mr-1" />
          ) : (
            <div
              className={`w-2 h-2 rounded-full ${
                status === "Alive" ? "bg-green-500" : "bg-red-500"
              } mr-1`}
            />
          )}
          <p className={`${loading ? "text-transparent" : "text-gray-500"}`}>
            {loading ? <Skeleton width={60} height={16} /> : status}
          </p>
        </div>
        <p className={`${loading ? "text-transparent" : "text-gray-500"}`}>
          {loading ? <Skeleton width={100} height={16} /> : `Species: ${species}`}
        </p>
        <span className="text-gray-400">Last known location:</span>
        <p className={`${loading ? "text-transparent" : "text-gray-500"}`}>
          {loading ? <Skeleton width={120} height={16} /> : origin}
        </p>
      </div>
      <BotaoFavorito isFavorito={false} onClick={() => null} />
    </div>
  );
};

export default CardPersonagem;
