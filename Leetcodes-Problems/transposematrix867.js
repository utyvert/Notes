function rotateGrid(arrayOfArrays){
  const newGrid = []
  
  for (let x = 0; x < arrayOfArrays.length; x++){
  
    let container = [];
    
    for (let y = 0; y < arrayOfArrays[x].length; y++){
      
      container.push(arrayOfArrays[y][x])
      
    }
    
    
    newGrid.push(container)
  }
  
  return newGrid;
}

console.log(rotateGrid([[1,2,3],[4,5,6],[7,8,9]])) // [[1,4,7],[2,5,8],[3,6,9]]
console.log(rotateGrid([[1,2,3],[4,5,6]])) // [[1,4],[2,5],[3,6]]

/*

[1,2,3]
[4,5,6]
[7,8,9]

[1,4,7]
[2,5,8]
[3,6,9]


[1,2,3]
[4,5,6]

[1,4]
[2,5]
[3,6]