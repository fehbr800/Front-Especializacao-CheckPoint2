import CardPersonagem from "./card-personagem.componente";
import { IChars } from "../../data/dto/IChar";
import { useSelector } from "../../data/store";

const GradePersonagem = () => {
  const { charReducer: chars, paginationReducer: pagination } = useSelector(
    ({ charReducer, paginationReducer }) => ({ charReducer, paginationReducer })
  );

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
      {chars.toShow.length > 0 &&
        chars.toShow[pagination.actual] &&
        chars.toShow[pagination.actual].map((item: IChars) => (
          <div key={item.id}>
            <CardPersonagem
              id={item.id}
              imageUrl={item.image}
              name={item.name}
              status={item.status}
              species={item.species}
              origin={item.origin.name}
            />
          </div>
        ))}
    </div>
  );
};

export default GradePersonagem;
