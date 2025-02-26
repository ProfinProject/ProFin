export class Category {
    constructor() {
        this.name = '';
        this.description = '';
        this.isPattern = false;
    }

    id!: string;
    name: string;
    description: string;
    isPattern: boolean;
}   