import {Codel} from "../Codel/Codel.ts";

export class ColorBlock {
    private codels: Codel[];

    constructor(codels: Codel[]) {
        this.codels = codels;
    }

    public size() {
        return this.codels.length;
    }
}