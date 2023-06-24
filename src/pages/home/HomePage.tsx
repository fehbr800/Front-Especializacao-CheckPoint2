import Filtros from "../../components/personagens/filtros.componente";
import GradePersonagens from "../../components/personagens/grade-personagens.componente";
import Paginacao from "../../components/paginacao/paginacao.componente";

const PaginaInicio = () => {
  return (
    <div className=" p-3">
    <h1 className="font-custom text-center text-5xl">
      <span className="animate-gradient">Rick And Morty</span>
    </h1>
    <div>
     
       <Filtros />
      <GradePersonagens />
      <Paginacao />


    </div>
  </div>
  );
};
export default PaginaInicio;