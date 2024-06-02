import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-day',
  standalone: true,
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
  providers: [LocationService]
})
export class DayComponent implements OnInit {
  sunrise: string = '';
  sunset: string = '';
  daylight: string = '';
  solarNoon: string = '';
  dayLength: string = '';

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.getLocationAndData();
  }

  getLocationAndData(): void {
    this.locationService.getCurrentPosition().subscribe(
      position => {
        const { latitude, longitude } = position.coords;
        this.fetchSunriseSunsetData(latitude, longitude);
      },
      error => {
        console.error('Error getting location:', error);
      }
    );
  }

  fetchSunriseSunsetData(lat: number, lng: number): void {
    this.locationService.getSunriseSunset(lat, lng).subscribe(
      data => {
        this.sunrise = new Date(data.sunrise).toLocaleTimeString();
        this.sunset = new Date(data.sunset).toLocaleTimeString();
        this.daylight = this.calculateDaylight(data.sunrise, data.sunset);
        this.solarNoon = new Date(data.solar_noon).toLocaleTimeString();
        this.dayLength = this.formatDayLength(data.day_length);
      },
      error => {
        console.error('Error fetching sunrise/sunset data:', error);
      }
    );
  }

  calculateDaylight(sunrise: string, sunset: string): string {
    const sunriseTime = new Date(sunrise).getTime();
    const sunsetTime = new Date(sunset).getTime();
    const daylightDuration = sunsetTime - sunriseTime;
    return this.formatDayLength(daylightDuration / 1000);
  }

  formatDayLength(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours} hours, ${minutes} minutes`;
  }
}
