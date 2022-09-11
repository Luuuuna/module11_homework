import { getPercents } from "./index.js";

describe('test for getPercents function', () => {
    it("shuld return 0", () => {
        expect(getPercents(0, 50)).toBe(0);
    }),
    it("shuld return number", () => {
        const number = 35;
        expect(getPercents(100, number)).toBe(number);
    }),
    it("shuld return percent of a number", () => {
        const percent = 70;
        const number = 30;
        expect(getPercents(percent, number)).toBe(21);
    })
});



