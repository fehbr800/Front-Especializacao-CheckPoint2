import GradePersonagemFavoritos from "../../components/personagens/garde-personagens-favoritos.component";

const PaginaFavoritos = () => {
  return (
    <div className="container">
      <div className="actions">
        <h3>Personagens Favoritos</h3>
        <button className="danger">Test Button</button>
      </div>
      <GradePersonagemFavoritos />
    </div>
  );
};

export default PaginaFavoritos;