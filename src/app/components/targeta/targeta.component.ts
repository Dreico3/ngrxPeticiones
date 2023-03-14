import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { Pokelocal } from 'src/app/interfaces/pokeLocal.interface';
import { Pokemon } from 'src/app/interfaces/pokemon.inteface';
import { ServicePokemonService } from 'src/app/services/service-pokemon.service';
import { cargarPokelocal } from 'src/app/state/actions/pokeLocal.actions';
import { AppState } from 'src/app/state/app.state';
import { selectListItems, selectPagina } from 'src/app/state/selectors/items.selectors';

@Component({
  selector: 'app-targeta',
  templateUrl: './targeta.component.html',
  styleUrls: ['./targeta.component.css']
})
export class TargetaComponent {
  //listaPokemon: Observable<Pokelocal[]> = EMPTY;
  listaPokemon$: Observable<readonly Pokemon[]> = EMPTY;
  constructor(
   // private servicePoLocal: ServicePokemonService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    //this.listaPokemon = this.servicePoLocal.getDataApi();
    this.listaPokemon$ = this.store.select(selectListItems);
  }

  siguiente(){
    console.log('apretaste siguiente perrro');
    console.log(this.store.select(selectPagina).subscribe(e=>console.log(e)))
  }
}
