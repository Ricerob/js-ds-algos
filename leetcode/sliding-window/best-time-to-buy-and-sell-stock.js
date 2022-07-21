/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    var currMaxProfit = 0;      // Current max profit
    var low = 0;                // "buying" day
    var high = 0;               // "selling" day
    while(high <= prices.length) {
        if(prices[high] - prices[low] > currMaxProfit) {
            currMaxProfit = prices[high] - prices[low];
        }
        else {
            if(prices[high] < prices[low]) {
                low = high;
            }
        }
        high++;
    }
    
    return currMaxProfit;
};

/*
 * In essence, there is a "sliding window" of possibilities, and you must find the optimal (highest) solution.
 * Keep two pointers, one for the lower index, one for the higher. Increment the high pointer every iteration.
 * Once you reach a point where the high index - low index is greater than your previous, overwrite it.
 * The lower window index will move up once it finds a new low, however, finding the global minimum doesn't 
 * guarentee the highest profit - the highest profit could be behind the global minimum.
*/