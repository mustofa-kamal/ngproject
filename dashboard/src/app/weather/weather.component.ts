import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocationService } from '../location.service';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy {
  city: string = '';
  weatherData: any;
  private subscriptions: Subscription = new Subscription();

  constructor(private locationService: LocationService, private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.locationService.getCurrentPosition().subscribe({
        next: (position) => {
          const { latitude, longitude } = position.coords;
          this.subscriptions.add(
            this.locationService.getCityFromCoordinates(latitude, longitude).subscribe({
              next: (city) => {
                this.city = city;
                this.fetchWeatherData();
              },
              error: (err) => console.error('Error fetching city name:', err)
            })
          );
        },
        error: (err) => console.error('Error getting location:', err)
      })
    );
  }

  fetchWeatherData(): void {
    if (!this.city) {
      console.error('City name is not available');
      return;
    }
    this.subscriptions.add(
      this.weatherService.getWeatherForCity(this.city).subscribe({
        next: (weatherData) => {
          this.weatherData = weatherData;
          console.log('Weather data:', this.weatherData);
        },
        error: (err) => console.error('Error fetching weather data:', err)
      })
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions to prevent memory leaks
    this.subscriptions.unsubscribe();
  }
}
