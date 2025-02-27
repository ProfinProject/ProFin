export class Panel {
    constructor() {
        this.title = 'Categoria';
        this.titlePlural = 'Categorias';
        this.description = 'foi a ' + this.title + ' que mais consumiu.';
        this.quantity = 8;
        this.totalValue = 550.00;
        this.mostConsumed = 'Lazer'
    }

    quantity: number;
    totalValue: number;
    title:string;
    description: string;
    titlePlural: string;
    mostConsumed: string;
}   