import { Component } from '@angular/core';
import { QuoteService } from '../services/quote.service';
import { Quote } from '../models/quote';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  quote!: Quote;

  constructor(private quoteService: QuoteService){}

  ngOnInit() {
    this.initializeQuote();
  }

  initializeQuote(){
    this.quoteService.getRandomQuote().subscribe(
      ((quote: Quote) => {
        this.quote = quote;
      })
    )
  }

}
