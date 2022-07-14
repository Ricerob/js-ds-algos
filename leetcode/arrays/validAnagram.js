/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    var arrs = new Array(26).fill(0);
    var arrt = new Array(26).fill(0);
    for(var i = 0; i < Math.max(s.length, t.length); i++) {
        arrs[s.charCodeAt(i) - 97] += 1;
        arrt[t.charCodeAt(i) - 97] += 1;
    }
    for(var j = 0; j < arrs.length; j++) {
        console.log(arrs[j], arrt[j]);
        if(arrs[j] !== arrt[j]) return false;
    }
    return true
};