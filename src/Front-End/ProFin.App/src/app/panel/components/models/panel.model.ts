export class Panel {
    constructor() {
        this.title = '';
        this.titlePlural = '';
        this.description = '';
        this.quantity = 0;
        this.totalValue = 0;
        this.mostConsumed = '';
        this.classIcon = '';
    }

    quantity: number;
    totalValue: number;
    title:string;
    description: string;
    titlePlural: string;
    mostConsumed: string;
    classIcon: string;
}   