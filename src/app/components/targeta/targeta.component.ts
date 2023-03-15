import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Observable, tap } from 'rxjs';
import { Pokelocal } from 'src/app/interfaces/pokeLocal.interface';
import { Pokemon } from 'src/app/interfaces/pokemon.inteface';
import { ServicePokemonService } from 'src/app/services/service-pokemon.service';
import { cargardoPokelocal, cargarPokelocal } from 'src/app/state/actions/pokeLocal.actions';
import { AppState } from 'src/app/state/app.state';
import { selectListItems, selectNexPage, selectPreviousPage } from 'src/app/state/selectors/items.selectors';

@Component({
  selector: 'app-targeta',
  templateUrl: './targeta.component.html',
  styleUrls: ['./targeta.component.css']
})
export class TargetaComponent {
  //listaPokemon: Observable<Pokelocal[]> = EMPTY;
  listaPokemon$: Observable<Pokemon[]> = EMPTY;

  urlnext: string|null = null;
  urlprevious: string|null = null;

  constructor(
    private pokeService: ServicePokemonService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    //this.listaPokemon = this.servicePoLocal.getDataApi();
    this.listaPokemon$ = this.store.select(selectListItems);
  }

  siguiente() {
    console.log('apretaste siguiente perrro');
    //this.store.select(selectPagina).subscribe(page=>console.log(page))

    this.store.select(selectNexPage).pipe(
      tap(next =>{
        //console.log(next);
        this.urlnext=next
      })
    ).subscribe()

    if(this.urlnext){
      this.pokeService.getPagePokemon2(this.urlnext).subscribe(
  
        res => this.store.dispatch(cargardoPokelocal(
          { pagina: res }
        ))
      )
    }else{console.log('no tenemos un next sorrry')}
  }

  regresar(){
    console.log('asi que quieres regresar prro')

    this.store.select(selectPreviousPage).pipe(
      tap(next =>{
        //console.log(next);
        this.urlprevious=next
      })
    ).subscribe()

    if(this.urlprevious){
      this.pokeService.getPagePokemon2(this.urlprevious).subscribe(
  
        res => this.store.dispatch(cargardoPokelocal(
          { pagina: res }
        ))
      )
    }else{console.log('no tenemos un previous sorrry')}
  }
}
