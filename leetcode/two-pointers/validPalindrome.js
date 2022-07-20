/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    var newS = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    var p1 = newS.length - 1
    for(let i = 0; i < newS.length / 2; i++) {
        if(newS.charAt(i) === newS.charAt(p1)) {
            p1--;
        }
        else {
            return false;
        }
    }
    return true
};