import { Observable } from "rxjs";
import { Pokelocal } from "./pokeLocal.interface";
import { Pokemon } from "./pokemon.inteface";

export interface Pagina {
    count: number;
    next: string;
    previous: null | string;
    results: [
        { name: string, url: string }
    ];
    data: Pokemon[];
}