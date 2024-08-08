export class Stack<TElement> {
    private elements: Array<TElement> = [];
    private size: number = 0;


    isEmpty(): boolean {
        return this.size === 0;
    }

    push(element: TElement): void {
        this.size = 1;
    }
}