import "./Detalhe.css";
import BotaoFavorito from "../../components/botoes/botao-favorito.componente";
import CardEpisodio from "../../components/episodios/card-episodio.componente";
import { ICardPersonagemProps } from "../../components/personagens/card-personagem.componente";

const PaginaDetalhe = ({
  imageUrl,
  name,
  status,
  species,
  origin
}: ICardPersonagemProps) => {

  return (
    <div className="container">
      <h3>{name}</h3>
      <div className={"detalhe"}>
        <div className={"detalhe-header"}>
          <img
            src={imageUrl}
            alt={name}
          />
          <div className={"detalhe-header-texto"}>
            <p>{name}</p>
            <p>{origin}</p>
            <p>{species}</p>
          </div>
          {/* <BotaoFavorito isFavorito={false} /> */}
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
