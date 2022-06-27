import { useDispatch } from "react-redux";
import { useState } from "react";

import getPokemonThunk from "../../store/modules/pokemon/thunks";

function SearchArea() {

    const dispatch = useDispatch();

    const [pokemonName, setPokemonName] = useState("");
    
    return ( 
        <>
            <input onChange={(event) => setPokemonName(event.target.value)} type="text" placeholder="Digite o nome do pokemon"/>
            <button onClick={()=> dispatch(getPokemonThunk(pokemonName))}>Pesquisar</button>
        </>
     );
}

export default SearchArea;