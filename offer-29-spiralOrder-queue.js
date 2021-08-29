/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    let result = []
    recur(matrix)
    return result;

    function recur(matrix){
        if(matrix.length === 0){
            return;
        }

        if(matrix.length === 1 || matrix[0].length === 1){
            result.push(...matrix.flat())
        }

        let matrixInner = []
        let leftStack = []
        let rightQueue = []

        result.push(...matrix.shift())

        while(matrix.length > 1){
            let layer = matrix.shift()
            leftStack.push(layer.shift())
            rightQueue.push(layer.pop())
            matrixInner.push(layer)
        }

        result.push(...rightQueue)
        result.push(...matrix[0].reverse())
        result.push(...leftStack.reverse())

        recur(matrixInner)
    }  
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))