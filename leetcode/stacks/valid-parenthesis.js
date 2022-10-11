/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    var stack = []
    for (var i in s) {
        switch(s[i]) {
            case '(':
                stack.push(s[i])
                break;
            case '[':
                stack.push(s[i])
                break;
            case '{':
                stack.push(s[i])
                break;
                
            case ')':
                if(stack.pop() !== '(') { return false;}
                break;
            case ']':
                if(stack.pop() !== '[') { return false;}
                break;
            case '}':
                if(stack.pop() !== '{') { return false;}
                break;
            default:
                console.log('Default case')
        }
    }
    return stack.length === 0
};