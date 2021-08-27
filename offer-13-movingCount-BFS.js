/**
 * BFS 广度优先搜索 非递归实现
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

 var movingCount = function(m, n, k) {
    let set = new Set();
    let queue = [[0,0]]
    
    while(queue.length > 0){
        let node = queue.shift();
        let i = node[0]
        let j = node[1]
        if(i > m - 1 || j > n - 1 || i < 0 || j < 0 || set.has(`${i},${j}`)){
           continue;
        }
        let str = `${i},${j}`
        if(!forbid(i,j,k)){
            queue.push([i+1,j])
            queue.push([i,j+1])
            set.add(str)
        }
    }
    console.log(set)
    return set.size;

    function forbid(i,j,k){
        let sum = (String(i)+String(j)).split('').reduce((pre,cur)=>{
            return pre+Number(cur)
        }, 0)
        return sum > k;
    }
}
console.log(movingCount(11,8,16))