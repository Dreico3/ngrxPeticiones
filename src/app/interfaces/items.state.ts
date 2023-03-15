import { Pagina } from "./pagina.interface";
import { Pokelocal } from "./pokeLocal.interface";
import { Pokemon } from "./pokemon.inteface";

export interface ItemsState {

    loading: boolean,
    items: Pokemon[],
    page:Pagina

}