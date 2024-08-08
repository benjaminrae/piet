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
        return this.elements.pop()!;
    }
}