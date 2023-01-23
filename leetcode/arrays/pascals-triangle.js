/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 0) return []
    if(numRows === 1) return [[1]];
    var triangle = [[1], [1, 1]]
    if(numRows === 2) return triangle
    let newCol;

    for(let i = 2; i < numRows; i++) {              // Iterate over rows
        newCol = [1]
        for(let j = 1; j < i; j++) {                // Iterate over columns
            newCol.push(triangle[i - 1][j - 1] + triangle[i - 1][j])
        }
        newCol.push(1)
        triangle.push(newCol)
    }
    return triangle
};

/* 
 * Only beats 22.5% in speed and 37% on memory. Computes Pascal's Triangle given numRows
 */