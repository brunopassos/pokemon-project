import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import pokeCardReducer from "./modules/pokemon/reducer";

const reducers = combineReducers({pokemon: pokeCardReducer});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;