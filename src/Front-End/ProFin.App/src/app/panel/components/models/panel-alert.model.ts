export class PanelAlert {
    constructor() {
        this.budget = 'Alimentação';
        // this.category = 'Categorias';
        this.budgetValue = 550.00;
        this.totalValueUsed = 780.85;
        this.percentageBudget = this.totalValueUsed / this.budgetValue * 100;
        this.description = 'O orçamento para ' + this.budget + ' é de ' +this.budgetValue + ' e já foi consumido ' + this.totalValueUsed;
    }

    budget: string;
    budgetValue: number;
    totalValueUsed: number;
    percentageBudget: number;
    // category:string;
    description: string;
}   