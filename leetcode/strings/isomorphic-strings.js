/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    let visitMap = new Map();
    let valuesMap = new Map();
    
    for(let i = 0; i < s.length ; i++) {
        if(valuesMap.has(t[i])){
           if(s[i] !== valuesMap.get(t[i])) {
               return false;
           }
        }
        if(visitMap.has(s[i])){
            if(t[i] !== visitMap.get(s[i])) {
                return false;
            }
        } else {
            visitMap.set(s[i], t[i]);
            valuesMap.set(t[i], s[i]);
            console.log('set ', s[i], ' to ', t[i]);
        }
    }
    
    return true
};

/*
 * This solution uses two maps as a sort of "bi-directional" mapping system.
 * Faster than 82%, less space than 42%.
 */