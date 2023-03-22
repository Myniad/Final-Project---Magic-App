import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeckTable } from '../Models/deck-table';
import { DeckService } from '../Services/deck.service';

@Component({
  selector: 'app-userdecks',
  templateUrl: './userdecks.component.html',
  styleUrls: ['./userdecks.component.css']
})
export class UserdecksComponent {
  constructor(private router:Router, private authService: SocialAuthService, private deckService: DeckService){}

  user:SocialUser = {} as SocialUser;
  loggedIn: boolean = false;
  Deck: DeckTable[]=[];

  deckName:string = "";
  newDeckName:string = "";

  ngOnInit():void{
    this.authService.authState.subscribe((user)=>{
      this.user=user;
      this.loggedIn=(user !=null);
      this.GetUserDecks();
  });
}

GetUserDecks(){
  this.deckService.GetUserDecks(this.user.id).subscribe((response: DeckTable[])=>{
  console.log(response);
  this.Deck = response;
  })
}

// added this needs testing 
ChangeDeckName(id:number, newName: string){
  this.deckService.ChangeDeckName(id,newName ).subscribe((response: DeckTable)=>{
  console.log(response);
  })
}

DeleteDeck(id:number):void{
  this.deckService.DeleteDeck(id).subscribe(() => {
    //takes back to homepage
    //this.Deck.splice(id, 1)
    this.router.navigateByUrl('/userdecks')
  })
}


}

