import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceCurrency',
  standalone: true,
})
export class PriceCurrencyPipe implements PipeTransform {
  transform(value: number): string {
    const formattedValue = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

    // Remueve el símbolo de moneda y agrega "ARS" al inicio
    return formattedValue.replace('ARS', 'ARS ');
  }
}
