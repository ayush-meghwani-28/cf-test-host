(function () {
  "use strict";

  // ADD: valid function before the syntax error - tests if partial registration happens
  CustomFunctions.associate("ADD", function (a, b) {
    return a + b;
  });

  // INTENTIONAL SYNTAX ERROR: unclosed function - everything below this fails to parse
  // This causes the entire script to fail at parse time, not just this function
  CustomFunctions.associate("BROKEN", function (a, b) {
    return a +    // <-- unclosed expression, missing closing brace and parenthesis

})();
