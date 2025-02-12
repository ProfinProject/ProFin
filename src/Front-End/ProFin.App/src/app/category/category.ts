import { Guid } from "guid-typescript";

export class Category{
    constructor(){
        this.name = '';
        this.description = '';
    }

    id!: string;
    name: string;
    description: string;
}