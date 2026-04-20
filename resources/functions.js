!function(){"use strict";
  CustomFunctions.associate("ADD", function(first, second) { return first * second; });
  CustomFunctions.associate("TESTID", function(first, second) { return first + second; });
  CustomFunctions.associate("MULTIPLY", function(first, second) { return first * second; });
  CustomFunctions.associate("COUNTER", function(handler) {
    var count = 0;
    var t = setInterval(function() {
      handler.setResult(++count);
    }, 1000);
    handler.onCanceled = function() { clearInterval(t); };
  });
  CustomFunctions.associate("RANDOM", function(handler) {
    var t = setInterval(function() {
      handler.setResult(Math.floor(Math.random() * 1000));
    }, 1000);
    handler.onCanceled = function() { clearInterval(t); };
  });
}();