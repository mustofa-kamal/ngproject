import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  city: string = 'Toronto';
  apiKey: string = '71757c28c54c952c97806b6ee752d1cf'; // Replace with your OpenWeatherMap API key

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`)
      .subscribe(
        data => this.weatherData = data,
        error => console.error('Error fetching weather data', error)
      );
  }
}