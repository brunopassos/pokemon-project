import api from "../../../services/api";
import {getPokemon} from "./actions";

const getPokemonThunk = (pokemonName) => (dispatch) => {
  api
    .get(`pokemon/${pokemonName}`)
    .then((resp) => dispatch(getPokemon(resp.data)))
    .catch((err) => console.log(err));
};

export default getPokemonThunk;
