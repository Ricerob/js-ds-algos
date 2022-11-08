/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    let arr = []
    return traverse(root, arr)
};

var traverse = function(root, arr) {
    if(!root) return arr
    arr.push(root.val)
    root.children.forEach((child) => {
        traverse(child, arr)
    })
    return arr
}