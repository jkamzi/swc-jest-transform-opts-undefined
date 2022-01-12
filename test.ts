function add(a: number, b: number): number {
  return a + b;
}

describe("add()", () => {
  it("should add a + b", () => {
    expect(add(1, 1)).toEqual(2);
  });
});
