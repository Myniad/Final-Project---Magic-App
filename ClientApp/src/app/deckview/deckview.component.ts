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
    private route: ActivatedRoute
  ) {}

    Deck:DeckTable = {} as DeckTable;
    Cards:CardTable[] = [];
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    let id: number = Number(routeParams.get('ID'));
    console.log(id);
    this.GetDeckById(id);
  }

  DeleteCard(ID:number){
    let index = this.Cards.findIndex(c=> c.id == ID);
    this.Cards.splice(index,1);
    this.deckService.DeleteCardFromDeck(ID).subscribe((result: any)=>{
      console.log(result)
    });
  }


  GetDeckById(ID:number){
    this.deckService.GetDeckById(ID).subscribe((response: DeckTable)=>{
    console.log(response);
    this.Deck = response;
    this.deckService.GetCardsByDeckId(ID.toString()).subscribe((result: CardTable[])=> {
      this.Cards = result;
    })
    })
  }

}
