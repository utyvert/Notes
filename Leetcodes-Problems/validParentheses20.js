const isValid = function(s) {
    const parArr = s.split('')
    if (parArr.length % 2 === 1) return false;
    let container = [];
    let isVal = true;

    for (let i = 0; i < parArr.length; i ++) {
        if (parArr[i] === '{') {
            for (let x = i + 1; x < parArr.length; x++) {
                if (parArr[x] === '}')
                parArr.splice(i, 1);
                parArr.splice(x, 1);
                break;
            }
        } else if (parArr[i] === '(') {
            for (let x = i + 1; x < parArr.length; x++) {
                if (parArr[x] === ')')
                parArr.splice(i, 1);
                parArr.splice(x, 1);
                break;
            }
        } else if (parArr[i] === '[') {
            for (let x = i + 1; x < parArr.length; x++) {
                if (parArr[x] === ']')
                parArr.splice(i, 1);
                parArr.splice(x, 1);
                break;
            }
        }


        return parArr;
    }

};



console.log(isValid('()')) // true
console.log(isValid("()[]{}")) // true
console.log(isValid("(]")) // false