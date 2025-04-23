import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private RECIPE_URL = "http://localhost:8080/quotes"

  constructor(private httpClient: HttpClient) {}

  getAllQuotes(): Observable<Quote[]>{
      return this.httpClient.get<Quote[]>(this.RECIPE_URL);
    }

  getQuoteById(quoteId: string):Observable<Quote>{
    return this.httpClient.get<Quote>(`$this.RECIPE_URL/${quoteId}`)
  }  

  getRandomQuote():Observable<Quote>{
    return this.httpClient.get<Quote>(this.RECIPE_URL + '/random');
  }  
   
}
