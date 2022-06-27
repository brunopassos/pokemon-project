import { useSelector } from "react-redux";

function PokeCard() {

  const {pokemon} = useSelector(({pokemon}) => pokemon);

  return <div>
    <p>{pokemon?.name}</p>
    <img src={pokemon?.sprites.front_default} alt="" />
  </div>;
}

export default PokeCard;
