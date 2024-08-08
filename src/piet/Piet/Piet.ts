import {Stack} from "../Stack/Stack.ts";

export class Piet {
    private readonly stack: Stack<number>;

    constructor(stack: Stack<number>) {
        this.stack = stack;
    }


    inputNumber(number: number) {
        this.stack.push(number);
    }

    outputNumber(): number {
        return this.stack.pop();
    }
}