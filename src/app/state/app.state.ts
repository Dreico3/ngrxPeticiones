import { ActionReducerMap } from "@ngrx/store";
import { ItemsState } from "../interfaces/items.state";
import { Pagina } from "../interfaces/pagina.interface";
import { Pokelocal } from "../interfaces/pokeLocal.interface";
import { PokeReducer } from "./reducers/items.reducers";

//solo es la interfas que tiene que tener el appState
export interface AppState{
    items:Pagina;
  
    /*esto es el interfas de ItemsState

    export interface ItemsState {

        loading: boolean,
        items: ReadonlyArray<Pokelocal>
    
    } */
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> ={
    items:PokeReducer
}