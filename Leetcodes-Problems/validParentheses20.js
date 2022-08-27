const isValid = function(s) {
    const parArr = s.split('')
    if (parArr.length % 2 !== 0) return false;
    let container = [];
    const map = { 
        ')': '(',
        ']': '[',
        '}': '{'
    };
    for (i of parArr) {
        if (!map[i]){
            container.push(i);
        } else if (container[container.length -1] === map[i]) container.pop();
        else return false;
    }

    return container.length === 0;
};



console.log(isValid('()')) // true
console.log(isValid("()[]{}")) // true
console.log(isValid("(]")) // false