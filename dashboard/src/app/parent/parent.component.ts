import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockComponent } from '../stock/stock.component';
import { EmailComponent } from '../email/email.component';
import { TodoComponent } from '../todo/todo.component';
import { WeatherComponent } from '../weather/weather.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, FormsModule, StockComponent, EmailComponent, TodoComponent, WeatherComponent],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  showStock = true;
  showEmail = true;
  showTodo = true;
}
