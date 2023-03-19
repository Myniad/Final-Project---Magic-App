import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardModel } from '../Models/CardModel';
import { CardsearchService } from '../Services/cardsearch.service';

@Component({
  selector: 'app-singlecard',
  templateUrl: './singlecard.component.html',
  styleUrls: ['./singlecard.component.css']
})
export class SinglecardComponent {
  public cardName:string = "";
  cardmodel:CardModel = {} as CardModel;
  constructor(private CardsearchService:CardsearchService, private route:ActivatedRoute, private router:Router){
    router.events.subscribe(() => {
      this.cardName = this.route.snapshot.paramMap.get('cardName') || "";
      //this.getCardExact() make new function to grab all details
    })
  }
}