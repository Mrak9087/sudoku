const SIZE_MATRIX = 9;
 
function checkMatrix(matrix,row,col,num){
    let row3x3 = Math.floor(row / 3) * 3;
    let col3x3 = Math.floor(col / 3) * 3;
    
    for (let j = 0; j < SIZE_MATRIX; j++){
        if (matrix[row][j] == num){
            return false;
        }
    }
 
    for (let i = 0; i < SIZE_MATRIX; i++){
        if (matrix[i][col] == num){
            return false;
        }
    }
 
    for (let i = row3x3; i < row3x3 + 3; i++){
        for (let j = col3x3; j < col3x3 + 3; j++){
            if (matrix[i][j] == num){
                return false;
            }
        }
    }
 
    return true
}

module.exports = function solveSudoku(matrix) {
  for (let i = 0; i < SIZE_MATRIX; i++){
    for (let j = 0; j < SIZE_MATRIX; j++){
        if (matrix[i][j] == 0){
            for (let num = 1; num < 10; num++){
                if (checkMatrix(matrix,i,j,num)){
                    matrix[i][j] = num;
                    if (solveSudoku(matrix)) {
                        return matrix;
                    }
                }
            }
            matrix[i][j] = 0;
            return false;
        }
    }
  }
  return matrix
}
