(function () {
  "use strict";

  // ADD: returns sum of two numbers
  CustomFunctions.associate("ADD", function (a, b) {
    return a + b;
  });

  // MULTIPLY: returns product of two numbers
  CustomFunctions.associate("MULTIPLY", function (a, b) {
    return a * b;
  });

  // SQUARE: returns the square of a number
  CustomFunctions.associate("SQUARE", function (n) {
    return n * n;
  });

  // GREET: returns a greeting string
  CustomFunctions.associate("GREET", function (name) {
    return "Hello, " + name + "!";
  });

  // STOPWATCH: streams elapsed seconds since the function started
  CustomFunctions.associate("STOPWATCH", function (handler) {
    var elapsed = 0;
    var timer = setInterval(function () {
      handler.setResult(elapsed++);
    }, 1000);
    handler.onCanceled = function () { clearInterval(timer); };
  });

  // RANDOM: streams a random number between min and max every second
  CustomFunctions.associate("RANDOM", function (min, max, handler) {
    var timer = setInterval(function () {
      var value = Math.random() * (max - min) + min;
      handler.setResult(Math.round(value * 100) / 100);
    }, 1000);
    handler.onCanceled = function () { clearInterval(timer); };
  });

  // LOG: logs a message to the console and returns it
  CustomFunctions.associate("LOG", function (message) {
    console.log(message);
    return message;
  });

  // JSERROR: deliberately throws a JS runtime error to test CF error handling
  CustomFunctions.associate("JSERROR", function (message) {
    throw new Error(message || "Intentional JS runtime error from JSERROR function");
  });

})();

