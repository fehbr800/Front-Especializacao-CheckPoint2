import Filtros from "../../components/personagens/filtros.componente";
import GradePersonagens from "../../components/personagens/grade-personagens.componente";
import Paginacao from "../../components/paginacao/paginacao.componente";

const PaginaInicio = () => {
  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personagens</h3>
        <button className="danger">Test Button</button>
      </div>
      <Filtros />
      <GradePersonagens />
      <Paginacao />
    </div>
  );
};

export default PaginaInicio;
