import "./Detalhe.css";
import BotaoFavorito from "../../components/botoes/botao-favorito.componente";
import CardEpisodio from "../../components/episodios/card-episodio.componente";

const PaginaDetalhe = () => {
  return (
    <div className="container">
      <h3>Rick Sanchez</h3>
      <div className={"detalhe"}>
        <div className={"detalhe-header"}>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="Rick Sanchez"
          />
          <div className={"detalhe-header-texto"}>
            <p>Rick Sanchez</p>
            <p>Planeta: Earth</p>
            <p>Genero: Male</p>
          </div>
          <BotaoFavorito isFavorito={false} />
        </div>
      </div>
      <h4>Lista de episódios em que o personagem apareceu</h4>
      <div className={"episodios-grade"}>
        <CardEpisodio />
        <CardEpisodio />
        <CardEpisodio />
      </div>
    </div>
  );
};

export default PaginaDetalhe;
