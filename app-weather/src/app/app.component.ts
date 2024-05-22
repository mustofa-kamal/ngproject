import { Component } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';
import { LiveDateTimeComponent } from './live-date-time/live-date-time.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [WeatherComponent, LiveDateTimeComponent]
})
export class AppComponent {
  title = 'weather-app';
}