import {Stack} from "../Stack.ts";
import {StackUnderflowException} from "../exceptions/StackUnderflowException.ts";
import {StackOverflowException} from "../exceptions/StackOverflowException.ts";

describe("Stack", () => {
    it("should create an empty Stack", () => {
        const stack = new Stack<number>();

        expect(stack.isEmpty()).toBe(true);
    })

    it("should not be empty when element is pushed onto stack", () => {
        const stack = new Stack<number>();

        stack.push(1);

        expect(stack.isEmpty()).toBe(false);
    })

    it("should peek element pushed onto stack", () => {
        const element = 1;
        const stack = new Stack<number>();
        stack.push(element);

        expect(stack.peek()).toBe(element);
    })

    it("should pop element pushed onto stack", () => {
        const element = 1;
        const stack = new Stack<number>();

        stack.push(element);
        const poppedElement = stack.pop();

        expect(poppedElement).toBe(element);
    })

    it("should underflow if empty stack is popped", () => {
        const stack = new Stack<number>();

        expect(() => stack.pop()).toThrowError(StackUnderflowException);
    })

    it("should have size 1 when element pushed onto empty stack", () => {
        const stack = new Stack<number>();

        stack.push(1);

        expect(stack.size()).toBe(1);
    })

    it("should pop elements off the stack starting with the last pushed element", () => {
        const first = 1;
        const second = 2;
        const stack = new Stack<number>();

        stack.push(first);
        stack.push(second);

        expect(stack.pop()).toBe(second);
        expect(stack.pop()).toBe(first);
    })

    it("should overflow if element pushed onto full stack", () => {
        const stack = new Stack<number>(1);

        stack.push(1);

        expect(() => stack.push(2)).toThrowError(StackOverflowException);
    })
})

