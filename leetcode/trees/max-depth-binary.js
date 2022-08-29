/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    if(!root) {
        return 0
    }
    
    let leftVal = maxDepth(root.left);
    let rightVal = maxDepth(root.right);
    
    return Math.max(leftVal, rightVal) + 1
};

/* 
 * This is a recursive approach. We first check the base case. If the node we're given is "falsy," or it
 * doesn't exist/ is null, we return 0 (not helpful to our search). Going back up the tree, we take the max
 * of the children under any given node (given it isn't a child). We recurse back up to the root and return our
 * largest value + 1 to account for the root itself.
*/