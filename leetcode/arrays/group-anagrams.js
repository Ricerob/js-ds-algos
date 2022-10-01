/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    var groups = [];
    var hashmap = new Map();
    strs.forEach(function(str) {
        let alphabetized = str.split('').sort().join('');
        
        if(!hashmap.has(alphabetized)) {
            hashmap.set(alphabetized, []);
        }
        
        hashmap.get(alphabetized).push(str);
    })
    
    hashmap.forEach(function(values, key){
        let grp = [];
        values.forEach(function(item){
            grp.push(item)
        })
        groups.push(grp)
    })
    
    return groups
    };