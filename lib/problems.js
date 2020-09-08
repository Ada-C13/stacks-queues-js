/*
Time Complexity: O(n)
Space Complexity: O(n)
*/

const Stack = require("./stack");

const balanced = (str) => {
    if (str === "") {
        return true;
    }

    if (str.length % 2 !== 0) {
        return false
    }

    const stack = new Stack();

    const parens = {
        "{": "}",
        "(": ")",
        "[": "]",
    }

    for (let i = 0; i < str.length; i++) {
        if(str[i] === "{" || str[i] === "(" || str[i] === "[") {
            stack.push(str[i])
        } else if(stack.isEmpty() || (parens[stack.peek()] !== str[i])) {
            return false
        } else {
            stack.pop();
        }
    }

    return stack.isEmpty();
}

/*
Time Complexity: ?
Space Complexity: ?
*/
const evaluatePostfix = (expr) => {
    throw new Error("This method has not been implemented!");
}

module.exports = { balanced, evaluatePostfix };