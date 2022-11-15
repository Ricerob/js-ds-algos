/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    var stackS = []
    var stackT = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '#') { stackS.pop()}
        else { stackS.push(s[i]); }
    }
    
    for(let i = 0; i < t.length; i++) {
        if(t[i] === '#') { stackT.pop()}
        else { stackT.push(t[i]); }
    }
    
    for(let i = 0; i < s.length; i++) {
        if(stackS[i] !== stackT[i]) { return false }
    }
    
    return true
};

/*
 * Faster than 92% of js submissions, uses 69% less memory. Makes two stacks, compares them
 * if different at the end.
*/