describe('0. About Expects', function() {

  // We shall contemplate truth by testing reality, via spec expectations.
  it('This test expects true', function() {

    // Your journey begins here: Replace the word false with true 
    expect(false).toBeTruthy();
  });

  // To understand reality, we must compare our expectations against reality.
  it('This test expects equality', function() {
    var expectedValue = FILL_ME_IN;
    var actualValue = 1 + 1;

    expect(actualValue === expectedValue).toBeTruthy();
  });

  // Some ways of asserting equality are better than others.
  it('You should assert equality a better way', function() {
    var expectedValue = FILL_ME_IN;
    var actualValue = 1 + 1;

    // toEqual() compares using common sense equality.
    expect(actualValue).toEqual(expectedValue);
  });

  // Sometimes you need to be precise about what you "type."
  it('You should assert an exact equality with ===', function() {
    var expectedValue = FILL_ME_IN;
    var actualValue = (1 + 1).toString();

    // toBe() will always use === to compare.
    expect(actualValue).toBe(expectedValue);
  });

  it("You should fill in a basic expectation", function() {
    var myExpectation = 4 > 7;
    expect(myExpectation).toBe(FILL_ME_IN);
  });

  it("You should fill in an expectation - part 2", function() {
    var myExpectation = 8 === (2*4);
    expect(myExpectation).toBe(FILL_ME_IN);
  });

  it("You should make up any true statement", function() {
    var myExpectation = FILL_ME_IN;
    expect(myExpectation).toBe(true);
  });

  it("You should make up any truthy statement", function() {
    var myExpectation = FILL_ME_IN;
    expect(myExpectation).not.toBe("Fill this value in");
    expect(myExpectation).not.toBe(true);
    expect(myExpectation).toBeTruthy();
  });

  it("You should make up any false statement", function() {
    var myExpectation = FILL_ME_IN;
    expect(myExpectation).toBe(false);
  });

  it("You should make up any falsey statement", function() {
    var myExpectation = FILL_ME_IN;
    expect(myExpectation).not.toBe("Fill this value in");
    expect(myExpectation).not.toBe(false);
    expect(myExpectation).toBeFalsy();
  });

});
