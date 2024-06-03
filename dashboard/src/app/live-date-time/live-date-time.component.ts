import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-live-date-time',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live-date-time.component.html',
  styleUrls: ['./live-date-time.component.css']
})
export class LiveDateTimeComponent implements OnInit, OnDestroy {
  dateTime: string='';
  private intervalId: any;

  constructor() { }

  ngOnInit(): void {
    this.updateDateTime();
    this.intervalId = setInterval(() => this.updateDateTime(), 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateDateTime(): void {
    try {
      const localDate = new Date();
      this.dateTime = this.formatDateWithoutSeconds(localDate);
    } catch (e) {
      const utcDate = new Date();
      this.dateTime = this.formatDateWithoutSeconds(utcDate);
    }
  }

  private formatDateWithoutSeconds(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: 'numeric' 
    };
    return date.toLocaleString(undefined, options);
  }
}
