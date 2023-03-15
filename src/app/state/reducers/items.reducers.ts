import { createReducer, on, setNgrxMockEnvironment } from "@ngrx/store";
import { ItemsState } from "src/app/interfaces/items.state";
import { Pagina } from "src/app/interfaces/pagina.interface";
import { Pokelocal } from "src/app/interfaces/pokeLocal.interface";
import { cargardoPokelocal, cargarPokelocal } from "../actions/pokeLocal.actions";

export const inicialState: Pagina = {
    loading:true,
    count: 0,
    next: null,
    previous: null,
    results: [
        { name: '', url: '' }
    ],
    data: []
}

/*  loading: false,
 items: [],
 page: {} as Pagina */
export const PokeReducer = createReducer(

    inicialState,
    //esto de cargarPokeloca son las ordenes que espera
    //y aqui es donde se hacen cambios al state
    on(cargarPokelocal, (state) => {
        return {...state, loading:false}
    }),
    //siempre resibe el estado y el segundo parametro son las propiedades que
    //resibe 
    on(cargardoPokelocal, (state, { pagina }) => {
        return {
            ...state,
            count: pagina.count,
            next: pagina.next,
            previous: pagina.previous,
            results: pagina.results,
            data: pagina.data
        }//como el padre es igual al valor podria quedar asi{...state, items}
        //pero lo hacemos haci para que sea mas entendible
        //Nota:intereante solo me faltaba esto joers
    })

)