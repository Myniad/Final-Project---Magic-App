import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CardModel } from '../Models/CardModel';
import { Datum } from '../Models/Datum';
import { CardsearchService } from '../Services/cardsearch.service';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  cardName:string = "";
  cardmodel:CardModel = {} as CardModel;
  constructor(private CardsearchService:CardsearchService, private router:Router, private authService: SocialAuthService){}
  ispaper:boolean[]= [];
  user:SocialUser = {} as SocialUser;
  loggedIn: boolean = false;

  ngOnInit():void{
    // this.signInWithGoogle;
    this.authService.authState.subscribe((user)=>{
      this.user=user;
      this.loggedIn=(user !=null);
      // console.log(this.user);
  });
}


  // signInWithGoogle(): void {
  //   this.authService.authState.subscribe((user)=>{
  //     this.user=user;
  //     this.loggedIn=(user !=null);
  //     console.log(this.user);
  //   })
  //   }

  signOut():void{
    this.authService.signOut();
    this.loggedIn=false;
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
