import { Component } from '@angular/core';
import { CardModel } from '../Models/CardModel';
import { Datum } from '../Models/Datum';
import { CardsearchService } from '../Services/cardsearch.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cardcomponent',
  templateUrl: './cardcomponent.component.html',
  styleUrls: ['./cardcomponent.component.css']
})

export class CardcomponentComponent {
  public cardName:string = "";
  cardmodel:CardModel = {} as CardModel;
  constructor(private CardsearchService:CardsearchService, private route:ActivatedRoute, private router:Router){
    router.events.subscribe((val) => {
      this.cardName = this.route.snapshot.paramMap.get('cardName') || "";
      this.getCardExact()
    })

    this.route.params.subscribe((cardName)=>{
      this.cardName = this.route.snapshot.paramMap.get('cardName') || "";
      this.getCardExact();
    })

  }
  ispaper:boolean[]= [];
  ngOnInit():void{
    // this.cardName = this.route.snapshot.paramMap.get('cardName') || "";//
    // // this.getCardExact();//
  }

  // refreshCall(){
  //   this.ngOnInit();//
  // }

  onSubmit():void{

    this.getCardExact()

  }

  getCardExact():void{
    console.log(this.cardName);
    this.CardsearchService.getCardExact(this.cardName).subscribe((response:CardModel)=>{
      console.log(response);
      // if (response.data != null){
      //   response.data == null;
      // }
      this.ispaper = new Array(response.data.length);
      for (let i:number = 0; i<response.data.length; i++){
        this.ispaper[i]=response.data[i].games.indexOf('paper') >-1;
      }
      this.cardmodel= response;
      
    })
  }







}
