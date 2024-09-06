import { Stack } from "../Stack/Stack.ts";
import { ColorBlock } from "../ColorBlock/ColorBlock.ts";

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

    public pop() {
        this.stack.pop();
    }

    public add() {
        const { top, secondTop } = this.popTopTwo();
        this.stack.push(top + secondTop);
    }

    public subtract() {
        const { top, secondTop } = this.popTopTwo();
        this.stack.push(secondTop - top);
    }

    public multiply() {
        const { top, secondTop } = this.popTopTwo();
        this.stack.push(top * secondTop);
    }

    public divide() {
        const { top, secondTop } = this.popTopTwo();
        this.stack.push(Math.floor(secondTop / top));
    }

    public modulo() {
        const { top, secondTop } = this.popTopTwo();
        this.stack.push(secondTop % top);
    }

    public not() {
        const top = this.stack.pop();

        this.stack.push(top === 0 ? 1 : 0);
    }

    public greater() {
        const { top, secondTop } = this.popTopTwo();
        this.stack.push(secondTop > top ? 1 : 0);
    }

    public duplicate() {
        const top = this.stack.peek();
        this.stack.push(top);
    }

    private popTopTwo() {
        const top = this.stack.pop();
        const secondTop = this.stack.pop();
        return { top, secondTop };
    }

    private charCodeFrom(character: string) {
        return character.charCodeAt(0);
    }

    private characterFrom(charCode: number) {
        return String.fromCharCode(charCode);
    }
}
