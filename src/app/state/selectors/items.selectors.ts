import { createSelector } from "@ngrx/store";
import { ItemsState } from "src/app/interfaces/items.state";
import { Pagina } from "src/app/interfaces/pagina.interface";
import { AppState } from "../app.state"

//este selector tiene relacion con la propiedad items
export const selectFeature = (state: AppState) => state.items;

export const selectListItems = createSelector(
    selectFeature,
    (state: Pagina) => state.data
)

export const selectCargando = createSelector(
    selectFeature,
    (state: Pagina) => state.loading
)

export const selectNexPage = createSelector(
    selectFeature,
    (state:Pagina)=>state.next
)
export const selectPreviousPage = createSelector(
    selectFeature,
    (state:Pagina)=>state.previous
)