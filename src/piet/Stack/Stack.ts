import { StackUnderflowException } from "./exceptions/StackUnderflowException.ts";
import { StackOverflowException } from "./exceptions/StackOverflowException.ts";

export class Stack<TElement> {
    private readonly elements: Array<TElement>;
    private top: number = -1;

    public constructor(size: number = 100) {
        this.elements = new Array<TElement>(size);
    }

    public isEmpty(): boolean {
        return this.top === -1;
    }

    /*
     * @throws {StackOverflowException}
     * */
    public push(element: TElement): void {
        if (this.isFull()) {
            throw new StackOverflowException();
        }

        this.elements[++this.top] = element;
    }

    public peek() {
        return this.elements[this.top];
    }

    /*
     * @throws {StackUnderflowException}
     * */
    public pop(): TElement {
        if (this.isEmpty()) {
            throw new StackUnderflowException();
        }

        return this.elements[this.top--];
    }

    public size() {
        return this.top + 1;
    }

    private isFull() {
        return this.top === this.elements.length - 1;
    }
}
