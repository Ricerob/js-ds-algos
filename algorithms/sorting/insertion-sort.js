function insertionSort(arr) {
    var sortedMarker;

    for(let i = 0; i < arr.length; i++) {
        sortedMarker = i + 1;
        while(arr[sortedMarker] < arr[sortedMarker - 1] || sortedMarker === 0) {
            swap(arr, sortedMarker, sortedMarker - 1)
            sortedMarker--;
        }
        
    }
}

function swap(array, idx1, idx2) {
    let temp = array[idx2];
    array[idx2] = array[idx1];
    array[idx1] = temp;
}

var arr = [-2, 0, 100, 4, 101, 3, -1]
insertionSort(arr)
console.log(arr)