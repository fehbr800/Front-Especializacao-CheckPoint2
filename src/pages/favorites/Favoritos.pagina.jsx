import GradePersonagens from "../../components/personagens/grade-personagens.componente";

const PaginaFavoritos = () => {
  return (
    <div className="container">
      <div className="actions">
        <h3>Personagens Favoritos</h3>
        <button className="danger">Test Button</button>
      </div>
      <GradePersonagens />
    </div>
  );
};

export default PaginaFavoritos;