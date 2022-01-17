import {StrengthPipe} from "./strength.pipe";

describe("Strength", () => {
  it('should display 5 (weak)', function () {
    let sut = new StrengthPipe();

    expect(sut.transform(5)).toBe("5 (weak)");
  });

  it('should display 10 (strong)', function () {
    let sut = new StrengthPipe();

    expect(sut.transform(10)).toBe("10 (strong)")
  });

  it('should display 20 (unbelievable)', function () {
    let sut = new StrengthPipe();

    expect(sut.transform(20)).toBe("20 (unbelievable)")
  });
});
