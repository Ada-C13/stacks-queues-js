const Stack = require("./stack")

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/
const balanced = (str) => {
    var symbols = {
        "{":"}", 
        "[":"]", 
        "(":")",
    }

    const stack = new Stack();
    const closings = Object.values(symbols);
    if (str.length % 2 !== 0) { return false }
    for (let i = 0; i < str.length; i++) {
        if (str[i] in symbols) { // push to stack since it's a key 
            stack.push(str[i])
        } else if (closings.includes(str[i])) {
            if (symbols[stack.pop()] !== str[i]) { return false }
        } 
    }
    return stack.isEmpty()
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
