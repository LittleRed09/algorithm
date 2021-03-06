/**
 * 
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var movingCount = function(m, n, k) {
    let set = new Set();
    dfs(0,0)
    return set.size;
    
    function dfs(i, j){
        if(i > m - 1 || j > n - 1 || forbid(i,j,k)){
            return;
        }
        let spot = i+','+j
        if(!set.has(spot)){
            set.add(spot)
            dfs(i+1,j)
            dfs(i,j+1)
        }
    }

    function forbid(i,j,k){
        let sum = (String(i)+String(j)).split('').reduce((pre,cur)=>{
            return pre+Number(cur)
        }, 0)
        return sum > k;
    }
}
console.log(movingCount(1,2,1))
