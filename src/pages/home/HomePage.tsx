import Filtros from "../../components/personagens/filtros.componente";
import GradePersonagens from "../../components/personagens/grade-personagens.componente";
import Paginacao from "../../components/paginacao/paginacao.componente";

const PaginaInicio = () => {
  return (

    <div>
     
       <Filtros />
      <GradePersonagens />
      <Paginacao />


    </div>
 
  );
};
export default PaginaInicio;