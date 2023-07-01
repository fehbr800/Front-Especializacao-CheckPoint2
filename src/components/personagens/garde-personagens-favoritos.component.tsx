import CardPersonagem from "./card-personagem.componente";
import { IChars } from "../../data/dto/IChar";
import { useSelector } from "../../data/store";

const GradePersonagemFavoritos = () => {
  const { charReducer: chars } = useSelector(
    ({ charReducer, paginationReducer }) => ({ charReducer, paginationReducer })
  );

  const flattenedFilteredChars = chars.cached.flatMap((item) => item).filter((item) => item.isFavorite)

  return (
    <div className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
    {flattenedFilteredChars.length > 0 &&
      flattenedFilteredChars.map((item: IChars) => (
        <div key={item.id} className="mb-4 md:mb-0">
          <CardPersonagem
            char={item}
          />
        </div>
      ))}
  </div>
  
  );
};

export default GradePersonagemFavoritos;