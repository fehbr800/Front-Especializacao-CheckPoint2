import "./Detalhe.css";
import BotaoFavorito from "../../components/botoes/botao-favorito.componente";
import CardEpisodio from "../../components/episodios/card-episodio.componente";
import PersonagemSingle from "../../components/personagens/personagem-single";
import { useSelector } from "../../data/store";
import { Navigate, useParams } from "react-router-dom";

const PaginaDetalhe = () => {
  const { id } = useParams();

  const { charReducer: chars } = useSelector(({ charReducer }) => ({
    charReducer
  }));
  const filterCharById = () => {
    const filtered = chars
      .flatMap((e) => e)
      .filter((e) => e.id.toString() === id);

    return filtered.length > 0 ? filtered[0] : null;
  };
  const filtered = filterCharById();

  return (
    <div>
      {filtered ? (
        <div key={filtered.id}>
          <h2>alguma coisa</h2>
          <PersonagemSingle
            imageUrl={filtered.image}
            name={filtered.name}
            status={filtered.status}
            species={filtered.species}
            origin={filtered.origin.name}
          />
        </div>
      ) : (
        <Navigate to="404-NotFound" />
      )}
    </div>

    // <div className="container">
    //   <h3>{name}</h3>
    //   <div className={"detalhe"}>
    //     <div className={"detalhe-header"}>
    //       <img
    //         src={imageUrl}
    //         alt={name}
    //       />
    //       <div className={"detalhe-header-texto"}>
    //         <p>{name}</p>
    //         <p>{origin}</p>
    //         <p>{species}</p>
    //       </div>
    //       {/* <BotaoFavorito isFavorito={false} /> */}
    //     </div>
    //   </div>
    //   <h4>Lista de episódios em que o personagem apareceu</h4>
    //   <div className={"episodios-grade"}>
    //     <CardEpisodio />
    //     <CardEpisodio />
    //     <CardEpisodio />
    //   </div>
    // </div>
  );
};

export default PaginaDetalhe;