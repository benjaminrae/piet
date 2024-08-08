import {Stack} from "../Stack.ts";

describe("Stack", () => {
    it("should create an empty Stack", () => {
        const stack = new Stack<number>();

        expect(stack.isEmpty()).toBe(true);
    })
})