import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardModel } from '../Models/CardModel';
import { Datum } from '../Models/Datum';
import { CardsearchService } from '../Services/cardsearch.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  cardName:string = "";
  cardmodel:CardModel = {} as CardModel;
  constructor(private CardsearchService:CardsearchService, private router:Router){}
  ispaper:boolean[]= [];

  ngOnInit():void{
    this.getCardExact();

  }

  onSubmit():void{
    this.ngOnInit();
    this.router.navigateByUrl("/", {skipLocationChange:true}).then(() => {
      this.router.navigateByUrl(`/search/${this.cardName}`);
    })
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
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
