import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CardModel } from '../Models/CardModel';
import { CardsearchService } from '../Services/cardsearch.service';

@Component({
  selector: 'app-singlecard',
  templateUrl: './singlecard.component.html',
  styleUrls: ['./singlecard.component.css']
})
export class SinglecardComponent {
  public cardName:string = "";
  public isCreature:boolean = false; 
  cardmodel:CardModel = {} as CardModel;

  constructor(private CardsearchService:CardsearchService, private route:ActivatedRoute, private router:Router){
    router.events.subscribe(() => {
      this.cardName = this.route.snapshot.paramMap.get('cardName') || "";
      this.getCardExact();
    })

  }
  
  ngOnInit():void{

  }
  
  getCardExact():void{
    this.CardsearchService.getCardExact(this.cardName).subscribe((response:CardModel)=>{
      this.cardmodel= response;
      console.log(this.cardmodel, "HERE")

      if (this.cardmodel.data[0].type_line.includes('Creature')) {
        this.isCreature = true
        console.log(this.isCreature)
      }
    })
}
}