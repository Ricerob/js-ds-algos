/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    let sIndex = 0;
    
    for(let i = 0; i < t.length; i++) {
        if(s[sIndex] === t[i]) {
            sIndex++;
        }
    }
    
    return sIndex === s.length;
};

/*
 * We iterate through string t while keeping track of what s char we're looking for.
 * If the next s char is found, move to next char.
 * Faster than 92%, less space than 55%.
 */