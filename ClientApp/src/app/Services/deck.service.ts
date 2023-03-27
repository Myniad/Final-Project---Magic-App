import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { DeckTable } from '../Models/deck-table';
import { CardTable } from '../Models/card-table';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private http: HttpClient
  ) {}

  CreateDeck(newDeck: string, Uid: string): Observable<DeckTable> {
    return this.http.post<DeckTable>(
      `${this.baseUrl}api/Deck/CreateDeck?deckName=${newDeck}&user=${Uid}`,
      {}
    );
  }

  GetDeckByName(userId: string, deckName: string): Observable<DeckTable> {
    return this.http.get<DeckTable>(
      `${this.baseUrl}api/Deck/GetDeckByName?UId=${userId}&DeckName=${deckName}`
    );
  }

  GetDecks(): Observable<DeckTable[]> {
    return this.http.get<DeckTable[]>(`${this.baseUrl}api/Deck/GetDecks`);
  }

  GetUserDecks(userId: string): Observable<DeckTable[]> {
    return this.http.get<DeckTable[]>(
      `${this.baseUrl}api/Deck/GetAllDeckByUser?UID=${userId}`
    );
  }
  //added this must test when online
  ChangeDeckName(ID: number, newName: string): Observable<DeckTable> {
    return this.http.put<DeckTable>(
      `${this.baseUrl}api/Deck/ChangeDeckName?ID=${ID}&newName=${newName}`,
      {}
    );
  }

  DeleteDeck(ID: number) {
    return this.http.delete<DeckTable>(
      `${this.baseUrl}api/Deck/DeleteDeck?ID=${ID}`
    );
  }

  AddCardToDeck(
    cardId: string,
    deckId: number,
    cardName: string
  ): Observable<DeckTable> {
    console.log(cardId);
    console.log(deckId);
    console.log(cardName);
    return this.http.post<DeckTable>(
      `${this.baseUrl}api/Deck/AddCardToDeck?CardId=${cardId}&deckId=${deckId}&cardName=${cardName}`,
      {}
    );
  }

  GetDeckById(ID: number): Observable<DeckTable> {
    return this.http.get<DeckTable>(
      `${this.baseUrl}api/Deck/GetDeckById?ID=${ID}`,
      {}
    );
  }

  GetCardsByDeckId(ID: string): Observable<CardTable[]> {
    return this.http.get<CardTable[]>(
      `${this.baseUrl}api/Deck/GetCardsByDeckId?ID=${ID}`,
      {}
    );
  }

  DeleteCardFromDeck(ID: number) {
    return this.http.delete<CardTable>(
      `${this.baseUrl}api/Deck/DeleteCardFromDeck?ID=${ID}`
    );
  }
}
