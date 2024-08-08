import {StackUnderflowException} from "./StackUnderflowException.ts";

export class Stack<TElement> {
    private elements: Array<TElement> = [];
    private top: number = -1;

    public isEmpty(): boolean {
        return this.top === -1;
    }

    public push(element: TElement): void {
        this.elements[++this.top] = element
    }

    public peek() {
        return this.elements[this.top];
    }

    public pop(): TElement {
        if (this.isEmpty()) {
            throw new StackUnderflowException()
        }

        return this.elements[this.top--]
    }
    public size() {
        return this.top + 1;
    }
}