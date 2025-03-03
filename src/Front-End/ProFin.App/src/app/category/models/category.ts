export class Category {
    constructor() {
        this.name = '';
        this.description = '';
        this.isPattern = false;
        this.userId = '';
    }

    id!: string;
    name: string;
    description: string;
    userId: string;
    isPattern: boolean;
}   