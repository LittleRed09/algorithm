/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isSubStructure = function(A, B) {
    if(A === null || B === null){
        return A === B
    }

    // 【关键】双递归
    return recursion(A, B, true) || isSubStructure(A.left, B) || isSubStructure(A.right, B)

    // 递归函数
    function recursion(a, b, isRoot) {
        if(a === null || b === null){
            return b === null;
        }

        if(a.val === b.val){
            return recursion(a.left, b.left, false) && recursion(a.right, b.right, false)
        }else if(isRoot){
            return recursion(a.left, b, true) || recursion(a.right, b, true)
        }else {
            return false;
        }
    }
};