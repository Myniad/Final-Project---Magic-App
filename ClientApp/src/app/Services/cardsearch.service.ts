import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardModel } from '../Models/CardModel';
import { Datum } from '../Models/Datum';

@Injectable({
  providedIn: 'root'
})
export class CardsearchService {

  constructor(@Inject('BASE_URL') private baseUrl: string, private http: HttpClient, ) { }

  getCardExact(cardName:string):Observable<CardModel>{
    return this.http.get<CardModel>(`${this.baseUrl}api/Card/SearchExact?cardName=${cardName}`, {})
  }

  getSingleCard(id:string):Observable<Datum>{
    return this.http.get<Datum>(`${this.baseUrl}api/Card/GetSingleCard?id=${id}`, {})
  }
}
