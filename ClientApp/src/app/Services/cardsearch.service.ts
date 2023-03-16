import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { card } from '../Models/card';

@Injectable({
  providedIn: 'root'
})
export class CardsearchService {

  constructor(@Inject('BASE_URL') private baseUrl: string, private http: HttpClient) { }


  




  getCardExact(cardName:string):Observable<card>{
    return this.http.get<card>(`${this.baseUrl}api/Card/SearchExact?cardName=${cardName}`, {})
  }
}
