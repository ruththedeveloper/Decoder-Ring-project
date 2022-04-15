// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");
describe("caesar", () => {
  describe("error handling", () => {
    it("it should return false if the shift amount is 0", () => {
      let input = "zebra magazine";
      let shift = 0;
      let actual = caesar(input, shift);
      expect(actual).to.be.false;
    });
    it("should return false if the shift amount is above 25", () => {
      const input = "zebra magazine";
      const shift = 26;
      const actual = caesar(input, shift);

      expect(actual).to.be.false;
    });
    it("should return false if the shift amount is -25 ", () => {
      const input = "zebra magazine";
      const shift = -26;
      const actual = caesar(input, shift);
      expect(actual).to.be.false;
    });
    it("should return false if  the shift amount  is not present", () => {
      let input = " zebra magazine";
      let shift = "";
      let actual = caesar(input, shift);
      expect(actual).to.be.false;
    });
  });
});
