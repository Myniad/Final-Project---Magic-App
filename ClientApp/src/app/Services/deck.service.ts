import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { DeckTable } from '../Models/deck-table';
import { CardTable } from '../Models/card-table';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(@Inject('BASE_URL') private baseUrl: string, private http: HttpClient,) { }

  CreateDeck(newDeck:string,Uid:string):Observable<DeckTable>{
    return this.http.post<DeckTable>(`${this.baseUrl}api/Deck?deckName=${newDeck}&user=${Uid}`,{})
  }

  // GetDeckByName(userId:string, deckName:string):Observable<DeckTable>{
  //   return this.http.get<DeckTable>()`${this.baseUrl}api/Deck/GetDeckByName?UId=${userId}&DeckName=${deckName}`);
  // }

  GetDecks():Observable <DeckTable[]>{
    return this.http.get<DeckTable[]>(`${this.baseUrl}api/Deck/GetDecks`)
  }








}