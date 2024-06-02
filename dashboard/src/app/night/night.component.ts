import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-night',
  standalone: true,
  templateUrl: './night.component.html',
  styleUrls: ['./night.component.css'],
  providers: [LocationService]
})
export class NightComponent implements OnInit {
  moonrise: string = '';
  moonset: string = '';
  moonPhase: string = '';
  moonPhaseImage: string = '';

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.getLocationAndData();
  }

  getLocationAndData(): void {
    this.locationService.getCurrentPosition().subscribe(
      position => {
        const { latitude, longitude } = position.coords;
        this.fetchMoonriseMoonsetData(latitude, longitude);
      },
      error => {
        console.error('Error getting location:', error);
      }
    );
  }

  fetchMoonriseMoonsetData(lat: number, lng: number): void {
    this.locationService.getMoonriseMoonset(lat, lng).subscribe(
      data => {
        this.moonrise = new Date(data.moonrise.time).toLocaleTimeString();
        this.moonset = new Date(data.moonset.time).toLocaleTimeString();
        const moonPhaseAngle = data.moonphase;
        this.moonPhase = this.getMoonPhaseDescription(moonPhaseAngle);
        this.moonPhaseImage = this.getMoonPhaseImage(moonPhaseAngle);
      },
      error => {
        console.error('Error fetching moonrise/moonset data:', error);
      }
    );
  }

  getMoonPhaseDescription(angle: number): string {
    if (angle >= 0 && angle < 90) {
      return 'Waxing Crescent';
    } else if (angle >= 90 && angle < 180) {
      return 'Waxing Gibbous';
    } else if (angle >= 180 && angle < 270) {
      return 'Waning Gibbous';
    } else if (angle >= 270 && angle < 360) {
      return 'Waning Crescent';
    } else if (angle === 0 || angle === 360) {
      return 'New Moon';
    } else if (angle === 90) {
      return 'First Quarter';
    } else if (angle === 180) {
      return 'Full Moon';
    } else if (angle === 270) {
      return 'Last Quarter';
    } else {
      return 'Unknown Phase';
    }
  }

  getMoonPhaseImage(angle: number): string {
    if (angle >= 0 && angle < 90) {
      return 'assets/moon_phases/waxing_crescent.png';
    } else if (angle >= 90 && angle < 180) {
      return 'assets/moon_phases/first_quarter.png';
    } else if (angle >= 180 && angle < 270) {
      return 'assets/moon_phases/waning_gibbous.png';
    } else if (angle >= 270 && angle < 360) {
      return 'assets/moon_phases/waning_crescent.png';
    } else if (angle === 0 || angle === 360) {
      return 'assets/moon_phases/new_moon.png';
    } else if (angle === 90) {
      return 'assets/moon_phases/first_quarter.png';
    } else if (angle === 180) {
      return 'assets/moon_phases/full_moon.png';
    } else if (angle === 270) {
      return 'assets/moon_phases/last_quarter.png';
    } else {
      return 'assets/moon_phases/unknown.png'; // Placeholder for any unknown phase
    }
  }
}
