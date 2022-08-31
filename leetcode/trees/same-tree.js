/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    if(!p && !q){
        return true
    }
    else if(!p || !q) {
        return false
    }
    else if(p.val !== q.val){
        return false
    }
    
    return isSameTree(p.left, q.left) === true && isSameTree(p.right, q.right) === true
};

/*
 * We must see if the two binary trees are the same. We will do this recursively. We first check if p and q
 * are both null at the same time. This is okay, as this means both trees look structuraly the same.
 * We then check if p OR q is null - this isn't okay as this means the trees aren't structurally the same.
 * We finally check if the values are different. At the end, we return a recursive result from both sides
 * of the tree. This will recurse downwards until it hits leaves, checking each tree for likeness.
 */