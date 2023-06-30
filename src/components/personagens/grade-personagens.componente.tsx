import CardPersonagem from "./card-personagem.componente";
import { IChars } from "../../data/dto/IChar";
import { useSelector } from "../../data/store";
import {  } from "../../data/store/actions/charReducerActions";
import { loadFavorites } from "../../data/store/reducers/favoritesReducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { FavoritesAction, fillChars, removeChars } from "../../data/store/actions/favoritosReducerAction";



const GradePersonagem = () => {
  const { charReducer: chars, paginationReducer: pagination } = useSelector(
    ({ charReducer, paginationReducer }) => ({ charReducer, paginationReducer })
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // Carregue os favoritos do armazenamento ao montar o componente
    const loadedFavorites = loadFavorites();
    dispatch(fillChars(loadedFavorites));
  }, [dispatch]);

  const handleFavoriteAction = (action: FavoritesAction) => {
    dispatch(action);
  };


  if (!Array.isArray(chars.toShow[pagination.actual])) {
    return null; // ou qualquer outra ação apropriada quando não houver dados
  }
  return (
    <div className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
    {chars.toShow.length > 0 &&
      chars.toShow[pagination.actual] &&
      chars.toShow[pagination.actual].map((item: IChars) => (
        
        <div key={item.id} className="mb-4 md:mb-0">
          
          <CardPersonagem
            id={item.id}
            imageUrl={item.image}
            name={item.name}
            status={item.status}
            species={item.species}
            origin={item.origin.name}
            onFavoriteClick={() => handleFavoriteAction(removeChars(item.id))}
    
          />
        </div>
      ))}
  </div>
  
  );
};

export default GradePersonagem;
