import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city: string = '';
  weatherData: any;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.locationService.getCurrentPosition().subscribe({
      next: (position) => {
        const { latitude, longitude } = position.coords;
        this.locationService.getCityFromCoordinates(latitude, longitude).subscribe({
          next: (city) => {
            this.city = city;
            this.fetchWeatherData();
          },
          error: (err) => console.error('Error fetching city name:', err)
        });
      },
      error: (err) => console.error('Error getting location:', err)
    });
  }

  fetchWeatherData(): void {
    // Implement your weather fetching logic here using this.city
    console.log(`Fetching weather data for ${this.city}`);
  }
}
