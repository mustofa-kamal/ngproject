import { Component, OnInit } from '@angular/core';
import moment from 'moment';  // Import moment
import 'moment/locale/bn';  // Import Bengali locale
import { LiveDateTimeComponent } from '../live-date-time/live-date-time.component';

@Component({
  selector: 'app-date',
  standalone: true,
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  imports: [LiveDateTimeComponent]
})
export class DateComponent implements OnInit {
  todayGregorian: string = '';
  todayHijri: string = '';
  todayBengali: string = '';
  todayJewish: string = '';

  constructor() {}

  ngOnInit(): void {
    this.setTodayDates();
  }

  setTodayDates(): void {
    const today = new Date();

    // Gregorian Calendar
    this.todayGregorian = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'long', weekday: 'long', year: 'numeric' }).format(today);

    // Hijri Calendar
    this.todayHijri = new Intl.DateTimeFormat('en-TN-u-ca-islamic', { day: 'numeric', month: 'long', weekday: 'long', year: 'numeric' }).format(today);

    // Bengali Calendar
    this.todayBengali = this.convertToBengaliDate(today);

    // Jewish Calendar
    this.todayJewish = new Intl.DateTimeFormat('en-u-ca-hebrew', { day: 'numeric', month: 'long', weekday: 'long', year: 'numeric' }).format(today);
  }

  convertToBengaliDate(gregorianDate: Date): string {
    const bengaliWeekdays = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"];
    const months = ["বৈশাখ", "জ্যৈষ্ঠ", "আষাঢ়", "শ্রাবণ", "ভাদ্র", "আশ্বিন", "কার্তিক", "অগ্রহায়ণ", "পৌষ", "মাঘ", "ফাল্গুন", "চৈত্র"];
    const now = new Date(gregorianDate.getFullYear(), gregorianDate.getMonth(), gregorianDate.getDate());
    const start = new Date(gregorianDate.getFullYear(), 3, 14);
    const diff = Math.ceil((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    const year = diff >= 0 ? gregorianDate.getFullYear() - 593 : gregorianDate.getFullYear() - 594;
    let monthIndex = Math.floor((diff + (diff < 0 ? 365 : 0)) / 30.44);
    let date = Math.floor((diff + (diff < 0 ? 365 : 0)) % 30.44 + 1);

    if (date > 30) {
      monthIndex = (monthIndex + 1) % 12;
      date = 1;
    }

    const weekday = bengaliWeekdays[now.getDay()];

    return `${weekday}, ${this.toBengaliNumerals(date)} ${months[monthIndex]} ${this.toBengaliNumerals(year)}`;
  }

  toBengaliNumerals(num: number): string {
    const bengaliDigits = '০১২৩৪৫৬৭৮৯';
    return num.toString().split('').map(digit => bengaliDigits[parseInt(digit, 10)]).join('');
  }
}
