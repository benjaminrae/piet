import {Stack} from "../Stack/Stack.ts";
import {ColorBlock} from "../ColorBlock/ColorBlock.ts";

export class Piet {
    private readonly stack: Stack<number>;

    constructor(stack: Stack<number>) {
        this.stack = stack;
    }


    public inputNumber(number: number) {
        this.stack.push(number);
    }

    public outputNumber(): number {
        return this.stack.pop();
    }

    public inputCharacter(character: string) {
        this.stack.push(this.charCodeFrom(character));
    }

    public outputCharacter(): string {
        return this.characterFrom(this.stack.pop());
    }


    public push(colorBlock: ColorBlock) {
        this.stack.push(colorBlock.size());
    }

    private charCodeFrom(character: string) {
        return character.charCodeAt(0);
    }

    private characterFrom(charCode: number) {
        return String.fromCharCode(charCode);
    }

    public pop() {
        this.stack.pop();
    }
}
