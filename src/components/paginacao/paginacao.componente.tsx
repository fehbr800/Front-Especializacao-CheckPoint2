import { useDispatch } from "react-redux";
import { PaginationGoTo } from "../../data/store/actions/paginationReducerAction";
import { useSelector } from "react-redux";
import { IPagination } from "../../data/dto/IPagination";

/**
 * Componente que contém os botões para paginar
 *
 * Você deve adicionar as propriedades necessárias para que funcione corretamente
 *
 *
 * @returns Elemento JSX
 */
const Paginacao = () => {
  const dispatch = useDispatch();
  const pagination: IPagination = useSelector(
    ({ paginationReducer }) => paginationReducer
  );

  return (
    <div className="paginacao flex items-center justify-center mt-4">
    <button
      disabled={pagination.actual === 0}
      className="bg-secundary text-white rounded p-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
      onClick={() => PaginationGoTo(dispatch, "BACK")}
    >
      Anterior
    </button>
    <span className="mx-2">{pagination.actual + 1}</span>
    <button
      disabled={pagination.actual === pagination.total}
      className="bg-secundary text-white rounded p-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
      onClick={() => PaginationGoTo(dispatch, "NEXT")}
    >
      Próximo
    </button>
  </div>
  
  );
};

export default Paginacao;
