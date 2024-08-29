import { Stack } from "../../Stack/Stack.ts";
import { Piet } from "../Piet.ts";
import { Codel } from "../../Codel/Codel.ts";
import { ColorBlock } from "../../ColorBlock/ColorBlock.ts";

describe("Piet", () => {
    let piet: Piet;
    let stack: Stack<number>;

    beforeEach(() => {
        stack = new Stack<number>();
        piet = new Piet(stack);
    });

    it("should input a number then output the same number", () => {
        const number = 1;

        piet.inputNumber(number);

        expect(piet.outputNumber()).toBe(number);
    });

    it("should input a character then output the same character", () => {
        const character = "a";

        piet.inputCharacter(character);

        expect(piet.outputCharacter()).toBe(character);
    });

    it("should push the number of codels in the received color block then output the same number", () => {
        const codels = [new Codel()];
        const number = codels.length;

        const colorBlock = new ColorBlock(codels);

        piet.push(colorBlock);
        expect(piet.outputNumber()).toBe(number);
    });

    it("should pop the most recent number of codels and not output it", () => {
        const firstCodels = [new Codel()];
        const secondCodels = [new Codel(), new Codel()];
        const secondNumber = secondCodels.length;
        const firstColorBlock = new ColorBlock(firstCodels);
        const secondColorBlock = new ColorBlock(secondCodels);

        piet.push(firstColorBlock);
        piet.push(secondColorBlock);

        piet.pop();
        const outputNumber = piet.outputNumber();

        expect(outputNumber).not.toContain(secondNumber);
    });

    it("should pop the two recently input numbers and push the sum back onto the stack", () => {
        const firstNumber = 1;
        const secondNumber = 2;
        const sum = firstNumber + secondNumber;

        piet.inputNumber(firstNumber);
        piet.inputNumber(secondNumber);

        piet.add();

        expect(piet.outputNumber()).toBe(sum);
    });
});
