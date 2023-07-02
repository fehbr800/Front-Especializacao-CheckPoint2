import GradePersonagemFavoritos from "../../components/personagens/garde-personagens-favoritos.component";

const PaginaFavoritos = () => {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col items-center">
      <div className="actions">
        <h3 className=" text-slate-50 font-custom mt-3 text-2xl">Personagens Favoritos</h3>
        <button className="danger">Test Button</button>
      </div>
      <div className="flex flex-col items-center mt-8">
        <GradePersonagemFavoritos />
      </div>
    </div>
  );
};


export default PaginaFavoritos;