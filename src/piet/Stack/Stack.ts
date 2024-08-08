export class Stack<TElement> {
    private elements: Array<TElement> = [];


    isEmpty(): boolean {
        return this.elements.length === 0;
    }
}