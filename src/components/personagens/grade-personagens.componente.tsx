import CardPersonagem from "./card-personagem.componente";
import { IChars } from "../../data/dto/IChar";
import { useSelector } from "../../data/store";

const GradePersonagem = () => {
  const { charReducer: chars, paginationReducer: pagination } = useSelector(
    ({ charReducer, paginationReducer }) => ({ charReducer, paginationReducer })
  );

  return (
    <div className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
    {chars.toShow.length > 0 &&
      chars.toShow[pagination.actual] &&
      chars.toShow[pagination.actual].map((item: IChars) => (
        
        <div key={item.id} className="mb-4 md:mb-0">
          <CardPersonagem
            char={item}
          />
        </div>
      ))}
  </div>
  
  );
};

export default GradePersonagem;
