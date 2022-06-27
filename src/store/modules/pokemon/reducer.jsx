import { GET_POKEMON } from "./actionsTypes";

const pokeCardReducer = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case GET_POKEMON:
            return action
    
        default:
            return state;
    }
}

export default pokeCardReducer;