var generate = function(numRows) {
    let pascal = [];
    for (let x = 0; x < numRows; x++){
        pascal[x] = [];
        pascal[x][0] = 1;
        for (let i = 1; i <= x; i++){
            pascal[x][i] = pascal[x-1][i-1] + pascal[x-1][i]
        }

    }

    return pascal;
};

console.log(generate(5)) // should output '[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]'
console.log(generate(1)) // should output [[1]]



