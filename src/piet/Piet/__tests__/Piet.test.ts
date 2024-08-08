import {Stack} from "../../Stack/Stack.ts";
import {Piet} from "../Piet.ts";

describe("Piet", () => {
    it("should input a number then output the same number", () => {
        const stack = new Stack<number>(10);
        const piet = new Piet(stack);
        const number = 1;

        piet.inputNumber(number);

        expect(piet.outputNumber()).toBe(number);
    })
})