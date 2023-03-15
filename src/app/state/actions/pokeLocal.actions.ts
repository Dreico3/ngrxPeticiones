import { createAction, props } from "@ngrx/store";
import { Pagina } from "src/app/interfaces/pagina.interface";
import { Pokelocal } from "src/app/interfaces/pokeLocal.interface";
import { Pokemon } from "src/app/interfaces/pokemon.inteface";


export const cargarPokelocal = createAction(
    '[Pokelocal List] cargando pokemons'
)

export const cargardoPokelocal = createAction(
    '[Pokelocal List] pokemons cargado',
    //en el prop se necesita que contega un array de pokelocal
    props<{ pagina: Pagina }>()
    //props<{ itemsd: Pokemon[],page:Pagina }>()
    //props<{ itemsd: Pokemon[] }>()
)