
import { Component, inject } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date3',
  standalone: true,
  imports: [ NgbModule ],
  templateUrl: './date3.component.html',
  styleUrl: './date3.component.css'
})
export class Date3Component {
  value: any;
  navigation = 'none';
  outsideDays = 'visible';
  calendar = inject(NgbCalendar);
  formatter = inject(NgbDateParserFormatter);
  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null = this.calendar.getToday();
  toDate: NgbDate | null = this.calendar.getNext(this.calendar.getToday(), 'd', 10);

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }
  ngDoCheck() {
    this.value = this.formatter.format(this.fromDate) + ' - ' + this.formatter.format(this.toDate);
  }
}
