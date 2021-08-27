/**
 * leetcode 79 矩阵中的路径
 * 知识点：矩阵DFS、贪心+剪枝
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(search(board, word, i, j, 0)){
                return true;
            }
        }
    }
    return false;

    function search(tempBoard, word, i, j, k){
        // 拷贝数组是为了防止在修改数组的时候对源数组造成影响，但其实可以通过撤销修改的方式来避免。
        //let tempBoard = JSON.parse(JSON.stringify(board))
        if(i >= tempBoard.length || i < 0 || j < 0 || j >= tempBoard[0].length || tempBoard[i][j] !== word[k]){
            return false;
        }
        if(k === word.length - 1){
            return true;
        }
        tempBoard[i][j] = ''
        let res = search(tempBoard, word, i+1,j,k+1) || search(tempBoard, word, i-1,j,k+1) || search(tempBoard, word, i,j+1,k+1) || search(tempBoard, word, i,j-1,k+1)
        //撤销，非常重要的一步
        tempBoard[i][j] = word[k]
        return res;
    }
};

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
let board2 = [["C","A","A"],["A","A","A"],["B","C","D"]]
let word = "ABCCED"
let word2 = "AAB"
//console.log(exist(board, word))
console.log(exist(board2, word2))

