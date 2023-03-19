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
  }

  onSubmit():void{
    //jank refresh 
    this.router.navigateByUrl("/", {skipLocationChange:true}).then(() => {
      this.router.navigate([`/search/${this.cardName}`]);
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
