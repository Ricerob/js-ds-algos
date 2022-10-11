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
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    var out = []
    traverse(root, out)
    return out
};

var traverse = function(root, out) {
    if(!root) return;
    console.log(root.val)
    
    traverse(root.left, out);
    out.push(root.val);
    traverse(root.right, out);
};