import { Component } from '@angular/core';
import { CardModel } from '../Models/CardModel';
import { Datum } from '../Models/Datum';
import { CardsearchService } from '../Services/cardsearch.service';
import { SocialUser, SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cardmodel:CardModel = {} as CardModel;
  constructor(private CardsearchService:CardsearchService, private authService: SocialAuthService){}
  ispaper:boolean[]= [];


}
