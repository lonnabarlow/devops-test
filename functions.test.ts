const {shuffleArray} = require('./utils')


describe('shuffleArray should', () => {
    it("is an array", () => {
        expect(shuffleArray).toEqual(shuffleArray);
    });
    it("returns an array of the same length as argument sent in", () => {
        expect(shuffleArray.length).toEqual(shuffleArray.length);
    });
})


describe('shuffleArray', () => {
    const shuffleArray = {
        fun: true,
        boring: false,
    };
    it("is fun", () => {
        expect(shuffleArray.fun).toBeTruthy();
    });
    it("is boring", () => {
        expect(shuffleArray.boring).toBeFalsy();
    });
});