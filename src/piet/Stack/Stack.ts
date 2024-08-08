import {StackUnderflowException} from "./StackUnderflowException.ts";

export class Stack<TElement> {
    private elements: Array<TElement> = [];

    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    push(element: TElement): void {
        this.elements.push(element);
    }

    peek() {
        return this.elements[this.elements.length - 1];
    }

    pop(): TElement {
        const element = this.elements.pop();

        if (element === undefined) {
            throw new StackUnderflowException()
        }

        return element;
    }
}