import Filtros from "../../components/personagens/filtros.componente";
import GradePersonagens from "../../components/personagens/grade-personagens.componente";
import Paginacao from "../../components/paginacao/paginacao.componente";

const PaginaInicio = () => {
  return (
    <div className="h-full min-h-screen flex flex-col items-center justify-center overflow-y-auto">
    <div className="mb-4">
      <Filtros />
    </div>
    <div className="mb-4">
      <GradePersonagens />
    </div>
    <div>
      <Paginacao />
    </div>
  </div>
  
  

  );
};
export default PaginaInicio;