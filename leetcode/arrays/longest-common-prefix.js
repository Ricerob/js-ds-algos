/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let longestSubstring = ""
    let testChar

    strs.sort((a, b) => {
        return a.length - b.length
    })

    for(let i = 0; i < strs[0].length; i++) {       // Test by char (0)
        testChar = strs[0][i]
        for(let j = 0; j < strs.length; j++){       // Test each str
            if(strs[j][i] !== testChar) {
                return longestSubstring
            }
        }
        longestSubstring += testChar;
    }

    return longestSubstring;
};

/* 
 * Naive solution: Sort, check if each index matches on each string. O(N * m), N being #
 * of strings, m being length of shortest string.
 * Faster than 69%, beats 68% on memory.
 */