function binarySearchWrapper(arr, k) {
    var ret = binarySearch(arr, k, 0, arr.length - 1)
    console.log(ret);
}

function binarySearch(arr, k, low, high) {
    if(low > high) return false
    else {
        mid = Math.round((high + low) / 2);
        if(arr[mid] === k) return mid;
        else if(arr[mid] > k) return binarySearch(arr, k, low, mid - 1)
        else return binarySearch(arr, k, mid + 1, high)
    }
}

let arr = [0, 10, 20, 25, 34, 60, 122, 139];
let k = 20;
binarySearchWrapper(arr, k);