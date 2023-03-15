import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { Pokelocal } from 'src/app/interfaces/pokeLocal.interface';
import { ServicePokemonService } from 'src/app/services/service-pokemon.service';
import { cargardoPokelocal, cargarPokelocal } from 'src/app/state/actions/pokeLocal.actions';
import { selectCargando } from 'src/app/state/selectors/items.selectors';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  loading$: Observable<boolean> = EMPTY;
  constructor(
    private store: Store<any>,
    private pokeService: ServicePokemonService
  ) { }

  ngOnInit(): void {
    console.log('iniciando componente');
    this.loading$ = this.store.select(selectCargando)
    //items sera igual a las repuesta que obtenemos del sevicio
    /* this.pokeService.getDataApi().subscribe(
      res=> this.store.dispatch(cargardoPokelocal(
        {items:res}
      ))
    ) */
    //esta linea es la inicializadora del strore y del effects
    this.store.dispatch(cargarPokelocal())
  }

  consultar(): void {

    //  this.pokeService.getPagePokemon2();
  }

}
