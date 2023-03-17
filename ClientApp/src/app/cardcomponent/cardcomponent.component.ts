import { Component } from '@angular/core';
import { CardModel } from '../Models/CardModel';
import { Datum } from '../Models/Datum';
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
  ispaper:boolean[]= [];
  ngOnInit():void{
    this.getCardExact();
  }

  getCardExact():void{
    console.log(this.cardName);
    this.CardsearchService.getCardExact(this.cardName).subscribe((response:CardModel)=>{
      console.log(response);
      this.ispaper = new Array(response.data.length);
      for (let i:number = 0; i<response.data.length; i++){
        this.ispaper[i]=response.data[i].games.indexOf('paper') >-1;
      }
      this.cardmodel= response;
      
    })
  }







}
