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
  origin
}: ICardPersonagemIndividualProps) => {
  return (
    <>
      <h1>{name}</h1>
      <img src={imageUrl} alt="" />
      <p>{status}</p>
      <p>{species}</p>
      <p>{origin}</p>
    </>
  );
};

export default PersonagemSingle;