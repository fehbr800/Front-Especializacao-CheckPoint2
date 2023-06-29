interface ICardPersonagemIndividualProps {
  imageUrl: string;
  name: string;
  status: string;
  species: string;
  origin: string;
  
}

const PersonagemSingle = ({
  imageUrl,
  name,
  status,
  species,
  origin,

}: ICardPersonagemIndividualProps) => {
  return (
    <>
      <div className="flex items-center justify-around max-h-screen mb-7">
        <div className="max-w-md rounded-lg shadow-md overflow-hidden">
          <div className="p-4 text-slate-50">
            <h1 className="text-2xl font-bold mb-2">{name}</h1>
            <img src={imageUrl} alt="Imagem do Personagem" className="w-full mb-4" />
            <div className="mb-2 text-slate-50">
              <p><span className="font-bold">Status:</span> {status} </p>
            </div>
            <div className="mb-2 text-slate-50">
              <p><span className="font-bold">Espécie:</span> {species} </p>
            </div>
            <div className="text-slate-50">
              <p> <span className="font-bold">Origem:</span> {origin} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonagemSingle;