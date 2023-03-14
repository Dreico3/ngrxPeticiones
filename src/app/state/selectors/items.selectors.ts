import { createSelector } from "@ngrx/store";
import { ItemsState } from "src/app/interfaces/items.state";
import { AppState } from "../app.state"

//este selector tiene relacion con la propiedad items
export const selectFeature = (state:AppState)=>state.items;

export const selectListItems = createSelector(
    selectFeature,
    (state:ItemsState)=>state.items
)

export const selectCargando = createSelector(
    selectFeature,
    (state:ItemsState)=>state.loading
)