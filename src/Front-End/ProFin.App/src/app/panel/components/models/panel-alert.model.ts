export class PanelAlert {
    constructor() {
        this.budget = 'Alimentação';
        this.budgetValue = 550.00;
        this.totalValueUsed = 780.85;
        this.percentageBudget = this.totalValueUsed / this.budgetValue * 100;
        this.classIcon = '';
        this.description = 'O orçamento para ' + this.budget + ' é de ' +this.budgetValue + ' e já foi consumido ' + this.totalValueUsed;
    }

    budget: string;
    budgetValue: number;
    totalValueUsed: number;
    percentageBudget: number;
    description: string;
    classIcon: string;
}   