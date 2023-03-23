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
  selectedIndex: number = -1;
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
  let index = this.Deck.findIndex(d=> d.id == id);
  this.Deck[index].deckName = newName;
  this.deckService.ChangeDeckName(id,newName ).subscribe((response: DeckTable)=>{
    console.log(Response);
  })
}

DeleteDeck(id:number):void{
  let index:number = this.Deck.findIndex((d)=> d.id == id);
  this.Deck.splice(index, 1);
  this.deckService.DeleteDeck(id).subscribe((response:any) => {
    console.log(Response);
    this.Deck.splice(id, 1)
    //takes back to homepage
    this.router.navigateByUrl('/userdecks')
  })
}

select(index: number) {
  this.selectedIndex = index;
}

unselect(index: number) {
  this.selectedIndex = -1;
}


}

