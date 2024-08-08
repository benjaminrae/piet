import {Stack} from "../Stack.ts";

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

})
