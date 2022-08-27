const isValid = function(s) {
    const parArr = s.split('')
    if (parArr.length % 2 !== 0) return false;
    let container = [];
    let isVal = true;

    for (let i = 0; i < parArr.length; i ++) {

        if (parArr[i] === '{') {
            for (let x = i + 1; x < parArr.length; x++) {
                if (parArr[x] === '}'){
                    console.log(parArr)
                    parArr.splice(x, 1);
                    parArr.splice(i, 1);
                    
                    break;
                }
            }
        }
        
        if (parArr[i] === '(') {
            for (let x = i + 1; x < parArr.length; x++) {
                if (parArr[x] === ')'){
                    console.log(parArr)
                    parArr.splice(x, 1);
                    parArr.splice(i, 1);
                    
                    break;
                }
            }
        }
        
        if (parArr[i] === '[') {
            for (let x = i + 1; x < parArr.length; x++) {
                if (parArr[x] === ']'){
                    console.log(parArr)
                    parArr.splice(x, 1);
                    parArr.splice(i, 1);
                    
                    break;
                }
            }
        }
    }
    console.log(parArr)
    return parArr.length === 0;
};



// console.log(isValid('()')) // true
console.log(isValid("()[]{}")) // true
// console.log(isValid("(]")) // false