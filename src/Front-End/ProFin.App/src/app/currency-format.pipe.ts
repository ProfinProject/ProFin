import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: number | string, currency: string = 'BRL', symbol: boolean = true, digitsInfo: string = '1.2-2'): string {
    if (value == null) {
      return '';
    }

    const numberValue = typeof value === 'string' ? parseFloat(value.replace(/[^\d.-]/g, '').replace(',', '.')) : value;

    const formatador = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formatador.format(numberValue);
  }
}