import { Component } from '@angular/core';
import { card } from '../Models/card';
import { CardsearchService } from '../Services/cardsearch.service';


@Component({
  selector: 'app-cardcomponent',
  templateUrl: './cardcomponent.component.html',
  styleUrls: ['./cardcomponent.component.css']
})
export class CardcomponentComponent {
  cardName:string = "Counterspell";

  constructor(private CardsearchService:CardsearchService){}

  ngOnInit():void{
    this.getCardExact();
  }

  getCardExact():void{
    console.log(this.cardName)
    this.CardsearchService.getCardExact(this.cardName).subscribe((response:card)=>{
      console.log(response)
    })
  }







}
