function bubbleSort(array) {
    var sorted = false;
    var swapFlag = true;

    while(!sorted) {
        swapFlag = false;
        for(let i = 0; i < array.length - 1; i++) {
            if(array[i] > array[i+1]) {
                swap(array, i, i+1);
                swapFlag = true;
                continue;
            }
        }
        if(swapFlag === false) {
            sorted = true;
        }
    }
    return array
}

function swap(array, idx1, idx2) {
    let temp = array[idx2];
    array[idx2] = array[idx1];
    array[idx1] = temp;
}