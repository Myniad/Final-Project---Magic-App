import { Component } from '@angular/core';
import { CardModel } from '../Models/CardModel';
import { CardsearchService } from '../Services/cardsearch.service';


@Component({
  selector: 'app-cardcomponent',
  templateUrl: './cardcomponent.component.html',
  styleUrls: ['./cardcomponent.component.css']
})
export class CardcomponentComponent {
  cardName:string = "Counterspell";
  cardmodel:CardModel = {} as CardModel;
  constructor(private CardsearchService:CardsearchService){}

  ngOnInit():void{
    this.getCardExact();
  }

  getCardExact():void{
    console.log(this.cardName);
    this.CardsearchService.getCardExact(this.cardName).subscribe((response:CardModel)=>{
      console.log(response);
      this.cardmodel= response;
      
    })
  }







}
