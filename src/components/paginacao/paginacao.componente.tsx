import { useDispatch } from "react-redux";
import "./paginacao.css";
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
    <div className="paginacao">
      <button
        disabled={pagination.actual === 0}
        className={"primary"}
        onClick={() => PaginationGoTo(dispatch, "BACK")}
      >
        Anterior
      </button>
      {pagination.actual + 1}
      <button
        disabled={pagination.actual === pagination.total}
        className={"primary"}
        onClick={() => PaginationGoTo(dispatch, "NEXT")}
      >
        Próximo
      </button>
    </div>
  );
};

export default Paginacao;
