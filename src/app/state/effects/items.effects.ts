import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, mergeMap, tap } from "rxjs";
import { ServicePokemonService } from "src/app/services/service-pokemon.service";
import { cargardoPokelocal } from "../actions/pokeLocal.actions";

@Injectable()
export class ItemsEffects {
    constructor(
        private actions$: Actions,
        private pokeService: ServicePokemonService
    ) { }

    /*  loadItems$ = createEffect(
         () => this.actions$.pipe(
             ofType('[Pokelocal List] cargando pokemons'),
             mergeMap(() => this.pokeService.getPokemons()
                 .pipe(
                     map(po => ({
                         type: '[Pokelocal List] pokemons cargado',
                         itemsd: po
                     })),
                     catchError(() => EMPTY))
             ))) */
    loadItems$ = createEffect(
        () => this.actions$.pipe(
            ofType('[Pokelocal List] cargando pokemons'),
            mergeMap(() => this.pokeService.getPagePokemon2()
                .pipe(
                    tap(po => console.log('esto es en el effect', po)),
                    map(po => {
                        return cargardoPokelocal({ pagina:po })
                    }),
                    catchError(() => {
                        console.log('error');
                        return EMPTY
                    }))
            )))
}