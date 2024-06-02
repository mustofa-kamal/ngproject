import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockComponent } from '../stock/stock.component';
import { EmailComponent } from '../email/email.component';
import { TodoComponent } from '../todo/todo.component';
import { WeatherComponent } from '../weather/weather.component';
import { QuotesComponent } from '../quotes/quotes.component';
import { DateComponent } from '../date/date.component';
import { DayComponent } from '../day/day.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, FormsModule, StockComponent, EmailComponent, TodoComponent, WeatherComponent, QuotesComponent, DateComponent, DayComponent],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  showDates=true;
  showDay=true;
  showWeather = true;
  showQuotes=true;
  showStock = false;
  showEmail = false;
  showTodo = false;


}
