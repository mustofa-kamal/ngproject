import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Quote {
  quote: string;
  author: string;
}

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit, OnDestroy {
  quotes: Quote[] = [];
  currentQuote: Quote | null = null;
  autoRefresh: boolean = false;
  autoRefreshInterval: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadQuotes();
  }

  ngOnDestroy(): void {
    this.stopAutoRefresh();
  }

  loadQuotes(): void {
    this.http.get<Quote[]>('assets/quotes.json').subscribe({
      next: (data) => {
        this.quotes = data;
        this.getRandomQuote();
      },
      error: (err) => console.error('Error loading quotes:', err)
    });
  }

  getRandomQuote(): void {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.currentQuote = this.quotes[randomIndex];
  }

  toggleAutoRefresh(): void {
    if (this.autoRefresh) {
      this.stopAutoRefresh();
    } else {
      this.startAutoRefresh();
    }
  }

  startAutoRefresh(): void {
    this.autoRefresh = true;
    this.autoRefreshInterval = setInterval(() => {
      this.getRandomQuote();
    }, 8000);
  }

  stopAutoRefresh(): void {
    this.autoRefresh = false;
    if (this.autoRefreshInterval) {
      clearInterval(this.autoRefreshInterval);
    }
  }
}
