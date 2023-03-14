import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { InicioComponent } from './components/inicio/inicio.component';
import { TargetaComponent } from './components/targeta/targeta.component';
import { AppRutasModule } from './app-rutas.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ROOT_REDUCERS } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { ItemsEffects } from './state/effects/items.effects';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TargetaComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRutasModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([ItemsEffects])// esto es lo que se agrega autoimaticamente al instalar la store
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
