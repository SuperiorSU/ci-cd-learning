import { sum } from "../helpers/sum.js";

// we can describe a series of test inside describe but we can write a simple test function outside the  describe scope as well
describe("test for sum function", ()=>{

    test("sums 2 + 2 is equal to 4", ()=>{
        expect(sum(2, 2)).toBe(4)
    });
    test("sums -5 + -5 is equal to -10", ()=>{
        expect(sum(-5, -5)).toBe(-10)
    });
})