import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private geocodingApiUrl = 'https://api.opencagedata.com/geocode/v1/json';
  private apiKey = '8f347603fbf143db87d2e1d6d8d8b3c5';  // Replace with your OpenCage API key
  private sunriseSunsetApiUrl = 'https://api.sunrise-sunset.org/json';
  private moonPhaseApiUrl = 'https://api.met.no/weatherapi/sunrise/3.0/moon';

  constructor(private http: HttpClient) {}

  getCurrentPosition(): Observable<GeolocationPosition> {
    return new Observable(observer => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => observer.next(position),
          error => observer.error(error)
        );
      } else {
        observer.error('Geolocation not available');
      }
    });
  }

  getCityFromCoordinates(lat: number, lng: number): Observable<string> {
    const url = `${this.geocodingApiUrl}?q=${lat}+${lng}&key=${this.apiKey}`;
    return this.http.get<any>(url).pipe(
      switchMap(response => {
        const city = response.results[0]?.components.city || response.results[0]?.components.town || response.results[0]?.components.village || 'Unknown';
        return from([city]);
      })
    );
  }

  getSunriseSunset(lat: number, lng: number): Observable<any> {
    const url = `${this.sunriseSunsetApiUrl}?lat=${lat}&lng=${lng}&formatted=0`;
    return this.http.get<any>(url).pipe(
      switchMap(response => from([response.results]))
    );
  }

  getMoonriseMoonset(lat: number, lng: number): Observable<any> {
    const date = new Date().toISOString().split('T')[0];
    const url = `${this.moonPhaseApiUrl}?lat=${lat}&lon=${lng}&date=${date}`;
    return this.http.get<any>(url).pipe(
      switchMap(response => from([response.properties]))
    );
  }
}
