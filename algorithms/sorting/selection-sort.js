function selectionSort(array) {
    if(array.length < 2) {print("Array too small");}
    console.log(array);


    var localMinIdx = 0;                                           // Local minimum at each run of the outside loop
    var sortedIdx = 0;                                             // Tracker to keep track of unsorted versus sorted partitions  

    for(sortedIdx; sortedIdx < array.length - 1; sortedIdx++) {    // Iterate through array, increasing sorted partition tracker each run
        localMinIdx = sortedIdx;                                    // Reset local minimum to the first element of the unsorted partition
        for(var i = sortedIdx; i < array.length; i++){          // Iterate through unsorted partition
            if(array[i] < array[localMinIdx]) {                        // If we find a new local minimum...
                localMinIdx = i;                                           // Set the local min to the new index
            }
        }
        swap(array, sortedIdx, localMinIdx);                        // Swap the current index and local minimum found in the unsorted partition
    }
    console.log(array);
}

function swap(array, idx1, idx2) {
    let temp = array[idx2];
    array[idx2] = array[idx1];
    array[idx1] = temp;
}