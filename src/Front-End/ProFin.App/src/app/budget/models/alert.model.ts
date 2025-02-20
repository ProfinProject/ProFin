export interface Alert {
  id?: number;
  type: 'warning' | 'danger';
  message: string;
  timestamp: Date;
}
