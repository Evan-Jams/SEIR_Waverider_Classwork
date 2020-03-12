const bubbleSort = (array) => {
    for (i = 0; i < array.length; i++) {
        for(x = 0; x <array.length; x++) {
            if (array[x] > array[x + 1]) {
                let element = array[x];
                array[x] = array[x + 1];
                array[x + 1] = element;
            }
        }
    }
    return array
}

const nums = [10, 3, 5, 2, 7, 9]
console.log(bubbleSort(nums))
