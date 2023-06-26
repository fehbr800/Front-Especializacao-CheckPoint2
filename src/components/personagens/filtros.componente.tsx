import { useDispatch } from "react-redux";
import { useSelector } from "../../data/store";
import { changeFilterInput } from "../../data/store/actions/filterReducerActions";

/**
 * Input para filtrar a resposta da api por nome do personagem
 *
 * 
 *
 *
 * @returns Elemento JSX
 */

const Filtros = () => {
  const { inputText } = useSelector(({ filterReducer }) => filterReducer)
  const dispatch = useDispatch<any>();
  return (
    <div className="filtros flex items-center justify-center mt-4">
    <label htmlFor="nome" className="mr-2 ">Filtrar por nome:</label>
    <input
      type="text"
      placeholder="Rick, Morty, Beth, Alien, ...etc"
      name="nome"
      value={inputText}
      onChange={(el) => changeFilterInput(dispatch, el.target.value)}
      className="border border-gray-300 rounded px-3 py-2 w-96 "
    />
  </div>
  );
};

export default Filtros;
