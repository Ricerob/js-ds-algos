/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * This is my first, naive solution, which is *extremely* slow. O(V * d) where V is the number of verticies and d is the number of matching root values to the subtree
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
    let firstNodes = []                         // d: number of root nodes found
    let found = false
    findRootNodes(root, subRoot, firstNodes)
    if(firstNodes.length === 0) return false;
    console.log("subRoot nodes found: ", firstNodes)

    firstNodes.forEach(function(node){
        console.log("Testing node: ", node)
        if(DFSCompare(node, subRoot)){
            console.log("DFS success! ", node, subRoot);
            found = true
        }
    })
    return found
    
};

// O(V)
var findRootNodes = function(root, subRoot, firstNodes) {
    if(!root) return null
    if(root.val == subRoot.val){ 
        console.log("Potential root found: ", root)
        firstNodes.push(root)
    }
    findRootNodes(root.left, subRoot, firstNodes);
    findRootNodes(root.right, subRoot, firstNodes);
    return firstNodes
}

var DFSCompare = function(root, subRoot) {
    if((!root && subRoot) ||(root && !subRoot)) {
        console.log("Children don't match up! ", root, subRoot)
        return false
    }
    if(!root && !subRoot) return true
    
    if(root.val == subRoot.val){
        console.log("Values match! ", root.val, subRoot.val)
        return DFSCompare(root.left, subRoot.left) && DFSCompare(root.right, subRoot.right)
    }
    else {
        console.log("values didn't match.", root.val, subRoot.val)
        return false
    }
}