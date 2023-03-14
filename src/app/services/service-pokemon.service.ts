import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, from, map, mergeMap, Observable, of, tap, toArray } from 'rxjs';
import { Pagina } from '../interfaces/pagina.interface';
import { Pokelocal } from '../interfaces/pokeLocal.interface';
import { Pokemon } from '../interfaces/pokemon.inteface';

@Injectable({
  providedIn: 'root'
})
export class ServicePokemonService {

  url: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(
    private http: HttpClient
  ) { }


  getPokemons(): Observable<Pokemon[]> {
    console.log('ven pokemon')
    return this.http.get<Pagina>(this.url).pipe(
      mergeMap(ele => from(ele.results).pipe(
        mergeMap(ele => this.http.get<Pokemon>(ele.url))
      )),
      toArray()
    )
  }

  getPagePokemon():Observable<Pagina>{
    console.log('traer pokemones con la pagina incluida');
    return this.http.get<Pagina>(this.url).pipe(
      map(po => {

        from(po.results).pipe(

          mergeMap(ele => this.http.get<Pokemon>(ele.url)),
          toArray(),
          map(ele => po.data = ele)
          
        ).subscribe()
        return po
      }),
      tap(ele=>console.log('esto regresa el service',ele)
    )/* .subscribe() */)
  }


  getDataApi(): Observable<Pokelocal[]> {
    //TODO: Aqui podemos hacer http.get('api...')
    const data = [
      {
        name: "ditto",
        base_experience: 101,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
      },
      {
        name: "bulbasaur",
        base_experience: 64,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      },
      {
        name: "ivysaur",
        base_experience: 142,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
      },
      {
        name: "venusaur",
        base_experience: 263,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
      },
      {
        name: "charmander",
        base_experience: 62,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
      },
      {
        name: "charmeleon",
        base_experience: 142,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
      },
      {
        name: "charizard",
        base_experience: 267,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
      },
      {
        name: "squirtle",
        base_experience: 63,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
      },
      {
        name: "wartortle",
        base_experience: 142,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
      },
      {
        name: "blastoise",
        base_experience: 265,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
      },
      {
        name: "caterpie",
        base_experience: 39,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
      },
      {
        name: "metapod",
        base_experience: 72,
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
      }
    ]

    return of(data).pipe(
      delay(1500)
    )
  }
}
