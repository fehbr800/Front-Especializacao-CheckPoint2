/* eslint-disable react-hooks/exhaustive-deps */
import CardPersonagem from "./card-personagem.componente";
import { useEffect, useState } from "react";
import { fillChars } from "../../data/store/actions/charReducerActions";
import { useDispatch } from "react-redux";
import { IChars } from "../../data/dto/IChar";
import { useSelector } from "../../data/store";

/**
 * Grade de personagens para a página inicial
 *
 * Você precisará adicionar as funções necessárias para exibir e paginar os personagens
 *
 *
 * @returns Elemento JSX
 */
const GradePersonagem = () => {
  const dispatch = useDispatch();
  const {charReducer: chars ,paginationReducer:pagination } = useSelector(({ charReducer,paginationReducer }) => ({ charReducer, paginationReducer }))
  
  useEffect(() => {
    // impedindo que requisições adicionais (desnecessárias) sejam feitas no primeiro load.
    if (chars.length === 0) {
      fillChars(dispatch)
    }
  }, [])

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
      { chars.length > 0 && chars[pagination.actual].map((item: IChars) => (
        <div key={item.id}>
          <CardPersonagem id={item.id} imageUrl={item.image} name={item.name} status={item.status} species={item.species} origin={item.origin.name}  />
        </div>
          
      ))}
    
    </div>
  );
};

export default GradePersonagem;
