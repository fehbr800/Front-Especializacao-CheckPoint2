import { Link } from "react-router-dom";
import rickmorty404 from "../../assets/rickmorty404.webp";

const Pagina404 = () => {
  return (
    <div className="flex justify-center h-full">
      <div className="text-center">
        <div className="flex items-center justify-center">
          <span className="text-slate-50 text-9xl font-custom sm:mx-0">
            4
          </span>
          <img
            src={rickmorty404}
            alt="Rick and Morty 404"
            className="bg-contain w-[30vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] z-10"
          />
          <span className="text-slate-50 text-9xl font-custom sm:ml-0">
            4
          </span>
        </div>

        <div className="mt-2">
          <h1 className="text-slate-100 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-custom mt-[-2em] mb-6">
            Oops! Página não encontrada.
          </h1>
          <p className="text-slate-100 text-base lg:text-lg xl:text-xl mt-9 mb-9">
            Parece que você acessou uma dimensão desconhecida. A página que você
            está procurando não existe nesta realidade.
          </p>
          <button className="text-primary text-slate-50 font-semibold hover:underline font-custom mb-[16.8vh]">
            <Link to="/" className="flex items-center">
              Voltar para a página inicial
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagina404;
