describe("2. About Functions", function() {

  it("You should declare a function", function() {

    function add(a, b) {
      return a + b;
    }

    expect(add(1, 2)).toBe(FILL_ME_IN);
  });

  it("You should know internal variables will override outer variables", function () {
    var message = "Outer";

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      var message = "Inner";
      return message;
    }

    expect(getMessage()).toBe(FILL_ME_IN);
    expect(overrideMessage()).toBe(FILL_ME_IN);
    expect(message).toBe(FILL_ME_IN);
  });

  it("You should have lexical scoping", function () {
    var variable = "top-level";
    function parentfunction() {
      var variable = "local";
      function childfunction() {
        return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toBe(FILL_ME_IN);
  });

  it("You should use lexical scoping to synthesize new functions", function () {

    function makeMysteryFunction(makerValue)
    {
      var newFunction = function doMysteriousThing(param)
      {
        return makerValue + param;
      };
      return newFunction;
    }

    var mysteryFunction3 = makeMysteryFunction(3);
    var mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(FILL_ME_IN);
  });

  it("You should allow extra function arguments", function () {

    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg("first", "second", "third")).toBe(FILL_ME_IN);

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    expect(returnSecondArg("only give first arg")).toBe(FILL_ME_IN);

    function returnAllArgs() {
      var argsArray = [];
      for (var i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(",");
    }

    expect(returnAllArgs("first", "second", "third")).toBe(FILL_ME_IN);
  });

  it("You should be able to pass functions as values", function () {

    var appendRules = function (name) {
      return name + " rules!";
    };

    var appendDoubleRules = function (name) {
      return name + " totally rules!";
    };

    var praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise("John")).toBe(FILL_ME_IN);

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe(FILL_ME_IN);

  });

  it("You can use a function that returns a function", function(){
    var myFunc = function (){
      var count = 0;
      return function () {
        return count + 1;
      };
    };

    expect(typeof(myFunc())).toEqual(FILL_ME_IN);
    expect(myFunc()()).toEqual(FILL_ME_IN);
  });
  
  it("You should know how to use functions and closures", function(){
    var myFunc = function (){
      var count = 0;
      return function () {
        count = count + 1;
        return count;
      };
    };

    var closure = myFunc();
    expect(closure()).toEqual(FILL_ME_IN);
    expect(closure()).toEqual(FILL_ME_IN);
  });

});
