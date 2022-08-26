var generate = function(numRows) {
    let pascal = []; //final output
    for (let x = 0; x < numRows; x++){
        pascal[x] = []; //current row
        pascal[x][0] = 1; // first number of current row is set to 1
        for (let i = 1; i <= x; i++){ // every number after the 1st index
            if(pascal[x-1][i]){ //if the previous row @ curr index is real
                pascal[x][i] = pascal[x-1][i-1] + pascal[x-1][i]; //current number is prev row @ curr index -1 PLUS prev row @ curr index
            } else { //else we assume its === 0
                pascal[x][i] = pascal[x-1][i-1] + 0; 
                
            }

        }

    }

    return pascal;
};

console.log(generate(5)) // should outtput '[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]'
console.log(generate(1)) // should ouput [[1]]



