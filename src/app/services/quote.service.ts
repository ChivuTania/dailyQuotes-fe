import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private QUOTE_URL = "https://dailyquote-be-web-hcbvddd8cegng0d0.westeurope-01.azurewebsites.net"

  constructor(private httpClient: HttpClient) {}

  getAllQuotes(): Observable<Quote[]>{
      return this.httpClient.get<Quote[]>(this.QUOTE_URL);
    }

  getQuoteById(quoteId: string):Observable<Quote>{
    return this.httpClient.get<Quote>(`$this.QUOTE_URL/${quoteId}`)
  }  

  getRandomQuote():Observable<Quote>{
    return this.httpClient.get<Quote>(this.QUOTE_URL + '/random');
  }  
   
}
