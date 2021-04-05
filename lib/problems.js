const Stack = require('./stack')
/*
Time Complexity: O(n^2) - the stack.pop() method invoked has O(n) time complexity and it is used inside a for loop.
Space Complexity: O(n) - we keep pushing values to the stack for a string of length n.
*/
const balanced = (str) => {
    if (str.length === 0) {
        return true;
    }

    let opens = ['[', '{', '(']

    let stack = new Stack;
    for (let i = 0; i < str.length; i++) {
        if (opens.includes(str[i])) {
            stack.push(str[i]);
        } else {
            let element = stack.pop();
            if ((str[i] === ']' && element != '[') || 
                (str[i] === '}' && element != '{') || 
                (str[i] === ')' && element != '(')) {
                return false;
            }
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

exports.balanced = balanced;
exports.evaluatePostfix = evaluatePostfix;
