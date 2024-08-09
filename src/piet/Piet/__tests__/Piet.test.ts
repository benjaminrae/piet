import {Stack} from "../../Stack/Stack.ts";
import {Piet} from "../Piet.ts";
import {Codel} from "../../Codel/Codel.ts";
import {ColorBlock} from "../../ColorBlock/ColorBlock.ts";

describe("Piet", () => {
    it("should input a number then output the same number", () => {
        const stack = new Stack<number>(10);
        const piet = new Piet(stack);
        const number = 1;

        piet.inputNumber(number);

        expect(piet.outputNumber()).toBe(number);
    })

    it("should input a character then output the same character", () => {
        const stack = new Stack<number>(10);
        const piet = new Piet(stack);
        const character = "a";

        piet.inputCharacter(character);

        expect(piet.outputCharacter()).toBe(character);
    })

    it("should push the number of codels in the received color block then output the same number", () => {
        const stack = new Stack<number>(10);
        const piet = new Piet(stack);
        const codels = [new Codel()];
        const colorBlock = new ColorBlock(codels);

        piet.push(colorBlock);

        expect(piet.outputNumber()).toBe(1);
    });
})