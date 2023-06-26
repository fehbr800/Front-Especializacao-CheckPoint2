import "./Detalhe.css";
import BotaoFavorito from "../../components/botoes/botao-favorito.componente";
import CardEpisodio from "../../components/episodios/card-episodio.componente";
import PersonagemSingle from "../../components/personagens/personagem-single";
import { useSelector } from "react-redux";
import { IChars } from "../../data/dto/IChar";
import { useDispatch } from "react-redux";
import {useEffect} from "react";
import { fillChars } from "../../data/store/actions/charReducerActions";


const PaginaDetalhe = () => {
  const dispatch = useDispatch();
  const {charReducer: chars } = useSelector(({ charReducer}) => ({ charReducer}));

  useEffect(() => {
    // impedindo que requisições adicionais (desnecessárias) sejam feitas no primeiro load.
    if (chars.length === 0) {
      fillChars(dispatch)
    }
  }, [])

  return (

    <div>
    {
      chars.length > 0 && chars.map((item: IChars) => (
        <div key={item.id}>
          <h2>alguma coisa</h2>
          <PersonagemSingle imageUrl={item.image} name={item.name} status={item.status} species={item.species} origin={item.origin.name} />
        </div>

      ))
    }
    </div>

    // <div key={item.id}>
    //   <PersonagemSingle imageUrl={item.image} name={item.name} status={item.status} species={item.species} origin={item.origin.name} />
    // </div>



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
