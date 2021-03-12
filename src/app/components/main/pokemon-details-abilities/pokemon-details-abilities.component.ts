import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MainComponent } from '../main.component';

@Component({
  selector: 'app-pokemon-details-abilities',
  templateUrl: './pokemon-details-abilities.component.html',
  styleUrls: ['./pokemon-details-abilities.component.scss']
})
export class PokemonDetailsAbilitiesComponent implements OnInit {

  @Input() pokemon: any;
   
  @Input() Ability: any;

  @Input() state: any;

  handleEvent: any;

  selectedInfo: string = 'Choose Ability';


  constructor(private handle: MainComponent) { }

  ngOnInit(): void {


  }

  handlerEvt(event: any) {
     this.handleEvent =  this.handle.handleEffect(event)
  } 
}
