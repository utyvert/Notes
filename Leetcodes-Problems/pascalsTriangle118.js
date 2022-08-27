// const generate = function(numRows) {
//     const output = [];
//     for (let i = 0; i < numRows; i++){
//         output[i] = []; //current row
//         output[i][0] = 1; // first number of current row is set to 1
//         for (let j = 1; j <= i; j++){ // every number after the 1st index
//             if(output[i-1][j]){ //if the previous row @ curr index is real
//                 output[i][j] = output[i-1][j-1] + output[i-1][j]; //current number is prev row @ curr index -1 PLUS prev row @ curr index
//             } else { //else we assume its === 0
//                 output[i][j] = output[i-1][j-1] + 0; 
                
//             }

//         }

//     }

//     return output;
// };


const generate = function(numRows) {
    const output = [];
    for (let i = 0; i < numRows; i++){
        output[i] = []; //current row
        output[i][0] = 1; // first number of current row is set to 1
        for (let j = 1; j <= i; j++){ // every number after the 1st index
            if(output[i-1][j]){ //if the previous row @ curr index is real
                output[i][j] = output[i-1][j-1] + output[i-1][j]; //current number is prev row @ curr index -1 PLUS prev row @ curr index
            } else { //else we assume its === 0
                output[i][j] = output[i-1][j-1] + 0; 
                
            }

        }

    }

    return output;
};

console.log(generate(5)) // should outtput '[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]'
console.log(generate(1)) // should ouput [[1]]



