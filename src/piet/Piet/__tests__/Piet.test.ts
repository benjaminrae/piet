import { Stack } from "../../Stack/Stack.ts";
import { Piet } from "../Piet.ts";
import { Codel } from "../../Codel/Codel.ts";
import { ColorBlock } from "../../ColorBlock/ColorBlock.ts";
import { expect } from "vitest";

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

    it("should pop the two recently input numbers and push the difference between the second top and the top value back onto the stack", () => {
        const firstNumber = 2;
        const secondNumber = 1;
        const difference = firstNumber - secondNumber;

        piet.inputNumber(firstNumber);
        piet.inputNumber(secondNumber);

        piet.subtract();

        expect(piet.outputNumber()).toBe(difference);
    });

    it("should pop the top two numbers off the stack and push the product back onto the stack", () => {
        const firstNumber = 2;
        const secondNumber = 3;
        const product = firstNumber * secondNumber;

        piet.inputNumber(firstNumber);
        piet.inputNumber(secondNumber);

        piet.multiply();

        expect(piet.outputNumber()).toBe(product);
    });

    it("should pop the top two numbers off the stack and push the quotient quotient of second top divided by the top back onto the stack", () => {
        const firstNumber = 6;
        const secondNumber = 3;
        const quotient = 2;

        piet.inputNumber(firstNumber);
        piet.inputNumber(secondNumber);

        piet.divide();

        expect(piet.outputNumber()).toBe(quotient);
    });

    it("should pop the top two numbers off the stack and push the remainder of the second top divided by the top back onto the stack", () => {
        const firstNumber = 6;
        const secondNumber = 4;
        const remainder = 2;

        piet.inputNumber(firstNumber);
        piet.inputNumber(secondNumber);

        piet.modulo();

        expect(piet.outputNumber()).toBe(remainder);
    });

    it("should pop the top value off the stack and push 1 if the value is 0", () => {
        const number = 0;

        piet.inputNumber(number);

        piet.not();

        expect(piet.outputNumber()).toBe(1);
    });

    it("should pop the top value off the stack and push 0 if the value is not 0", () => {
        const number = 1;

        piet.inputNumber(number);

        piet.not();

        expect(piet.outputNumber()).toBe(0);
    });

    it("should pop the top two numbers off the stack and push 1 if the second top is greater than the top", () => {
        const firstNumber = 2;
        const secondNumber = 1;

        piet.inputNumber(firstNumber);
        piet.inputNumber(secondNumber);

        piet.greater();

        expect(piet.outputNumber()).toBe(1);
    });

    it("should pop the top two numbers off the stack and push 0 if the second top is not greater than the top", () => {
        const firstNumber = 1;
        const secondNumber = 2;

        piet.inputNumber(firstNumber);
        piet.inputNumber(secondNumber);

        piet.greater();

        expect(piet.outputNumber()).toBe(0);
    });

    it("should push a copy of the top number onto the stack", () => {
        const number = 1;

        piet.inputNumber(number);

        piet.duplicate();

        expect(piet.outputNumber()).toBe(number);
        expect(piet.outputNumber()).toBe(number);
    });

    it("should pop the top two numbers off the stack and then rotate the top Y values up by X where X was the first value popped and Y the second", () => {
        piet.inputNumber(4);
        piet.inputNumber(5);
        piet.inputNumber(1);
        piet.inputNumber(2);
        piet.inputNumber(3);

        piet.inputNumber(3);
        piet.inputNumber(1);

        piet.roll();

        expect(piet.outputNumber()).toBe(2);
        expect(piet.outputNumber()).toBe(1);
        expect(piet.outputNumber()).toBe(3);
        expect(piet.outputNumber()).toBe(5);
        expect(piet.outputNumber()).toBe(4);
    });

    it("shouldn't do anything if stack too short to roll", () => {
        piet.inputNumber(1);

        piet.roll();

        expect(piet.outputNumber()).toBe(1);
    });

    it("shouldn't do anything if stack too short to roll (empty)", () => {
        piet.roll();

        expect(() => piet.outputNumber()).toThrow();
    });

    it("shouldn't do anything if stack too short to roll", () => {
        piet.inputNumber(1);
        piet.inputNumber(2);

        piet.roll();

        expect(piet.outputNumber()).toBe(2);
        expect(piet.outputNumber()).toBe(1);
    });

    it("should roll with one", () => {
        piet.inputNumber(1);
        piet.inputNumber(0);
        piet.inputNumber(2);

        piet.roll();

        expect(piet.outputNumber()).toBe(1);
    });

    it("shouldn't do anything if depth is -1", () => {
        piet.inputNumber(1);
        piet.inputNumber(-1);
        piet.inputNumber(2);

        piet.roll();

        expect(piet.outputNumber()).toBe(2);
        expect(piet.outputNumber()).toBe(-1);
        expect(piet.outputNumber()).toBe(1);
    });

    it("should roll two", () => {
        piet.inputNumber(1);
        piet.inputNumber(2);
        piet.inputNumber(1);
        piet.inputNumber(2);

        piet.roll();

        expect(piet.outputNumber()).toBe(2);
        expect(piet.outputNumber()).toBe(1);
    });

    it("shouldn't do anything if rolls is 0", () => {
        piet.inputNumber(1);
        piet.inputNumber(2);
        piet.inputNumber(0);

        piet.roll();

        expect(piet.outputNumber()).toBe(0);
        expect(piet.outputNumber()).toBe(2);
        expect(piet.outputNumber()).toBe(1);
    });
});
