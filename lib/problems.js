/*
Given a string containing opening and closing braces, check if it represents a balanced expression or not.

For example:

{ [{}{}] }, and { { } { } } are balanced expressions.

{ () } [), and {(}) are not balanced

Hint: You can use a stack here!

Time Complexity: O(n)
Space Complexity: O(n)
*/

const balanced = (str) => {
  const stack = [];
  const pairings = { "(": ")", "{": "}", "[": "]" };
  const opening = Object.keys(pairings);
  const closing = Object.values(pairings);
  for (let i = 0; i < str.length; i++) {
    if (opening.includes(str[i])) {
      console.log(str[i]);
      stack.push(str[i]);
      console.log(stack);
    } else if (closing.includes(str[i])) {
      const char = stack.pop();
      console.log(char);
      if (char === undefined || pairings[char] !== str[i]) return false;
    }
  }
  return stack.length === 0;
};

// const str = "[{}{}]";
// (((

// console.log(balanced(str));

/*
34+
Time Complexity: O(n)
Space Complexity: O(n) n for stack
*/
const evaluatePostfix = (expr) => {
  const stack = [];
  for (let i = 0; i < expr.length; i++) {
    if (!isNaN(parseInt(expr[i]))) {
      stack.push(expr[i]);
      console.log(stack);
      console.log(expr[i]);
    } else {
      const a = parseInt(stack.pop());
      const b = parseInt(stack.pop());
      const operation = expr[i];
      if (operation === "+") {
        stack.push(a + b);
        console.log(stack);
      } else if (operation === "-") {
        stack.push(b - a);
        console.log(stack);
      } else if (operation === "/") {
        stack.push(Math.floor(b / a));
        console.log(stack);
      } else if (operation === "*") {
        stack.push(a * b);
        console.log(stack);
      }
    }
  }
  return stack.pop();
};
const expr = "35+6*";
console.log(evaluatePostfix(expr));

exports.balanced = balanced;
exports.evaluatePostfix = evaluatePostfix;
