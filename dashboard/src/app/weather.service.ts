import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private openWeatherMapUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = '71757c28c54c952c97806b6ee752d1cf';

  constructor(private http: HttpClient) {}

  getWeatherForCity(city: string): Observable<any> {
    const url = `${this.openWeatherMapUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get<any>(url).pipe(
      map(response => {
        // Here you can transform the response if needed
        return response;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Error occurred:', error);
    // Customize the error handling as per your requirement
    return throwError('An error occurred while fetching weather data. Please try again later.');
  }
}
