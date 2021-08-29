/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    if(matrix.length === 0) return []
    if(matrix.length === 1 || matrix[0].length === 1){
        return matrix.flat();
    }
    let m = matrix.length; //行
    let n = matrix[0].length; // 列
    let mid = Math.floor(Math.max(m, n) / 2)
    let result = []
    recur(matrix, 0)
    return result;

    function recur(matrix, start){
        if(start > mid || matrix[start][start] === ''){
            return;
        }
        let i = start;
        let j = start;
        while(j<n && matrix[i][j] !== ''){
            result.push(matrix[i][j])
            matrix[i][j] = ''
            j++
        }
        j--
        i++
        while(i<m && matrix[i][j] !== ''){
            result.push(matrix[i][j])
            matrix[i][j] = ''
            i++
        }
        i--
        j--
        while(j>-1 && matrix[i][j] !== ''){
            result.push(matrix[i][j])
            matrix[i][j] = ''
            j--
        }
        j++
        i--
        while(i>0 && matrix[i][j] !== ''){
            result.push(matrix[i][j])
            matrix[i][j] = ''
            i--
        }
        i++
        recur(matrix, i)
    }
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))