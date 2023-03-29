import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CardModel } from '../Models/CardModel';
import { Datum } from '../Models/Datum';
import { CardsearchService } from '../Services/cardsearch.service';
import {
  BaseLoginProvider,
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Secret } from '../secret';

declare const gapi: any;
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],


})
export class NavMenuComponent {
  cardName: string = '';
  cardmodel: CardModel = {} as CardModel;
  ispaper: boolean[] = [];
  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;
  token: string = '';

  constructor(
    private CardsearchService: CardsearchService,
    private router: Router,
    private authService: SocialAuthService
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('id_token')
    this.signIn();
    if (token) {
      console.log(this.user.idToken);
      this.authService.signIn(Secret.clientId)
    } else {
      this.signIn();
    }
  }


  signIn() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      const idToken = user.idToken;
      localStorage.setItem('id_token', idToken);
      let token = localStorage.getItem('id_token');
    });
  }

  signOut(): void {
    this.authService.signOut();
    this.loggedIn = false;
    // localStorage.removeItem('id_token');
      this.router.navigate(['']);
  }

  onSubmit(): void {
    //jank refresh
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([`/search/${this.cardName}`]);
    });
  }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}


