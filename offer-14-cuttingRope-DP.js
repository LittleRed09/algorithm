/**
 * @param {number} n
 * @return {number}
 */
 var cuttingRope = function(n) {
    let arr = []
    arr[0] = 1
    for(let i=1;i< n - 1; i++){
        let temp = []
        for(let j=0;j<i;j++){
            temp.push(Math.max(arr[j]*(i-j),i+1))
        }
        arr[i] = Math.max(...temp)
    }
    let temp = []
    let i = n-1;
    for(let j=0;j<i;j++){
        temp.push(arr[j]*(i-j))
    }
    return Math.max(...temp)
};