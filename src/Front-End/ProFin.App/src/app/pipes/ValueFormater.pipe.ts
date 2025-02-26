import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "valueformater"
})

export class ValueFormater implements PipeTransform {
    transform(value: number | string): string {
        if (!value) return 'R$ 0,00';
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(value));
    }
}