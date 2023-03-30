import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardTable } from '../Models/card-table';
import { DeckTable } from '../Models/deck-table';
import { DeckService } from '../Services/deck.service';

@Component({
  selector: 'app-deckview',
  templateUrl: './deckview.component.html',
  styleUrls: ['./deckview.component.css'],
})
export class DeckviewComponent {
  constructor(
    private deckService: DeckService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: SocialAuthService
  ) {}
  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;
  deckName: string = '';
  newDeck: string = '';

  Deck: DeckTable = {} as DeckTable;
  Cards: CardTable[] = [];
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });
    const routeParams = this.route.snapshot.paramMap;
    let id: number = Number(routeParams.get('ID'));
    console.log(id);
    this.GetDeckById(id);
    if (this.loggedIn == false) {
      this.router.navigate(['/']);
      // window.location.reload();
      console.log("done");
    }
  }

  DeleteCard(ID: number) {
    let index = this.Cards.findIndex((c) => c.id == ID);
    this.Cards.splice(index, 1);
    this.deckService.DeleteCardFromDeck(ID).subscribe((result: any) => {
      console.log(result);
    });
  }

  TotalCost():number{

    let result = 0;
    this.Cards.forEach(c=>{ 
      if(c.price != null && c.price != 'null'){
        result += Number(c.price)
    }

    })
    return result;
  } 


  GetDeckById(ID: number) {
    this.deckService.GetDeckById(ID).subscribe((response: DeckTable) => {
      console.log(response);
      this.Deck = response;
      this.deckService
        .GetCardsByDeckId(ID.toString())
        
        .subscribe((result: CardTable[]) => {

          this.Cards = result;
          this.Cards.sort((a,b)=>(a.cardName > b.cardName)?1:-1);
        });
    });
  }
}
