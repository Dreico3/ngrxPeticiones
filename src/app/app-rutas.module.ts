import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { InicioComponent } from "./components/inicio/inicio.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const rutas: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: '', redirectTo: '/inicio', pathMatch: "full" },
    { path: '**', component: PageNotFoundComponent },
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(rutas)
    ],
    exports: [RouterModule]
})

export class AppRutasModule { }