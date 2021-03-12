import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PokeInfo } from '../models/pokemon.models';
import { ServiceApiService } from '../service/service-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  @Output() effect: boolean = false;

  @Output() abilitys: any;

  @Input() offset: number = 20;

  ArrayPokemons: any;
  isImage: boolean = false;

  ImageURL: string = '';

  anyInformation: Array<PokeInfo> = [];
  ObjectInfo: Array<PokeInfo> = [];

  next: string = '';
  previous: string = '';



  constructor(private service: ServiceApiService) { }

  ngOnInit(): void {
    this.service.getPokemons().then((item: any) => {

      this.ArrayPokemons = item.results,
        this.next = item.next,
        this.previous = item.previous
    })
  }

  infoPokemon(event: string) {
    this.service.getInfoPokemon(event).then((item: any) => this.ObjectInfo = item)
      .then((obj: any) => {
        return (
          this.ObjectInfo = obj,
          this.ImageURL = obj.sprites.other.dream_world.front_default,
          this.anyInformation = obj.abilities,
          this.effect = false
        )
      })
    this.isImage = true
  }

  handleEffect(event: string): void {
    if (event != 'Choose Ability')
      this.service.getInfoAbilities(event).then((item: any) => {
        return (
          this.abilitys = item[0].effect,
          this.effect = true
        )
      })
  }

  nextPage() {
    this.service.getPaginator(this.next).then((item: any) => {
      this.ArrayPokemons = item.results,
        this.next = item.next,
        this.previous = item.previous
      this.offset = this.offset + 20
    })
  }

  previusPage() {
    if (this.previous)
      this.service.getPaginator(this.previous).then((item: any) => {
        this.ArrayPokemons = item.results,
          this.next = item.next,
          this.previous = item.previous,
          this.offset = this.offset - 20;
      })
  }

}
