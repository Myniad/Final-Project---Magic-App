import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeckTable } from '../Models/deck-table';
import { DeckService } from '../Services/deck.service';

@Component({
  selector: 'app-create-deck',
  templateUrl: './createdeck.component.html',
  styleUrls: ['./createdeck.component.css'],
})
export class CreateDeckComponent {
  constructor(
    private router: Router,
    private authService: SocialAuthService,
    private deckService: DeckService
  ) {}
  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;
  deckName: string = '';
  newDeck: string = '';
  Deck: DeckTable[] = [];

  ngOnInit(): void {

    // this.signInWithGoogle;
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      // console.log(this.user);
    });
    if (this.loggedIn == false) {
      this.router.navigate(['']);
    }
  }

  CreateDeck(): void {
    console.log(this.newDeck, 'before function runs');
    this.deckService
      .CreateDeck(this.newDeck, this.user.id)
      .subscribe((response: DeckTable) => {
        console.log(response);
        console.log(this.newDeck, 'after function runs');
        this.router.navigate(['userdecks']);
        this.GetDecks();
      });
  }

  GetDecks() {
    this.deckService.GetDecks().subscribe((response: DeckTable[]) => {
      console.log(response);
      this.Deck = response;
    });
  }
}
