
import { Pokemon } from "./pokemon.inteface";

export interface Pagina {
    loading:boolean,
    count: number;
    next: null | string;
    previous: null | string;
    results: [
        { name: string, url: string }
    ];
    data: Pokemon[];
}