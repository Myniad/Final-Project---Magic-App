import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CardModel } from '../Models/CardModel';
import { Card_Face } from '../Models/Datum';
import { CardsearchService } from '../Services/cardsearch.service';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { DeckTable } from '../Models/deck-table';
import { DeckService } from '../Services/deck.service';

@Component({
  selector: 'app-singlecard',
  templateUrl: './singlecard.component.html',
  styleUrls: ['./singlecard.component.css'],
})
export class SinglecardComponent {
  public cardName: string = '';
  public isCreature: boolean = false;
  cardmodel: CardModel = {} as CardModel;
  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;
  Deck: DeckTable[] = [];
  currentDeckId: number = 0;

  constructor(
    private CardsearchService: CardsearchService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: SocialAuthService,
    private deckService: DeckService
  ) {
    // router.events.subscribe(() => {
    this.cardName = this.route.snapshot.paramMap.get('cardName') || '';
    this.getCardExact();
    // })
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      this.GetUserDecks();
    });
  }

  GetUserDecks() {
    this.deckService
      .GetUserDecks(this.user.id)
      .subscribe((response: DeckTable[]) => {
        console.log(response);
        this.Deck = response;
        if (this.Deck.length>0){
          this.currentDeckId = this.Deck[0].id;
        }
      });
  }

  AddCardToDeck(deckId: number, cardId: string) {
    console.log(deckId, cardId, this.cardName);
    this.deckService
      .AddCardToDeck(cardId, deckId, this.cardName)
      .subscribe((response: any) => {
        console.log(response);
      });
  }

  ConvertStringToNumber(input: string) {
    if (input.trim().length == 0) {
      return NaN;
    }
    return Number(input);
  }

  getCardExact(): void {
    this.CardsearchService.getCardExact(this.cardName).subscribe(
      (response: CardModel) => {
        this.cardmodel = response;
        console.log(this.cardmodel, 'HERE');
        if (this.cardmodel.data[0].card_faces == null) {
          this.cardmodel.data[0].card_faces = [
            {} as Card_Face,
            {} as Card_Face,
          ];
          this.cardmodel.data[0].card_faces[0].image_uris =
            this.cardmodel.data[0].image_uris;
        }

        if (this.cardmodel.data[0].type_line.includes('Creature')) {
          this.isCreature = true;
          console.log(this.isCreature);
        }
      }
    );
  }
}
