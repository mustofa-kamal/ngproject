declare module 'hebrew-date' {
    class HebrewDate {
      constructor(date?: Date);
      year(): number;
      month(): number;
      date(): number;
      monthName(): string;
      format(formatString: string): string;
    }
    
    export = HebrewDate;
  }
  