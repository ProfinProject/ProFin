import { CurrencyPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';

interface type {
  ward_no: number;
  patient: string;
  name: string;
  date: string;
  status: string
  bills: number;
}
@Component({
  selector: 'app-wg-recent-pay',
  standalone: true,
  imports: [CurrencyPipe, NgClass],
  templateUrl: './wg-recent-pay.component.html',
  styleUrl: './wg-recent-pay.component.css'
})
export class WgRecentPayComponent {

  paymentData: type[] = [
    {
      ward_no: 12,
      patient: 'Mr. Bobby',
      name: 'Dr. Jackson',
      date: '01 August 2024',
      status: 'Checkin',
      bills: 120
    },
    {
      ward_no: 10,
      patient: 'Mr. Dexter',
      name: 'Dr. Charles',
      date: '02 August 2024',
      status: 'Panding',
      bills: 540
    },
    {
      ward_no: 3,
      patient: 'Mr. Nathan',
      name: 'Dr. Frederick',
      date: '08 August 2024',
      status: 'Canceled',
      bills: 320
    },
    {
      ward_no: 15,
      patient: 'Mr. Aurora',
      name: 'Dr. Roman',
      date: '05 August 2024',
      status: 'Checkin',
      bills: 455
    },
    {
      ward_no: 12,
      patient: 'Mr. Matthew',
      name: 'Dr. Samantha',
      date: '12 August 2024',
      status: 'Checkin',
      bills: 499
    }
  ]
}
