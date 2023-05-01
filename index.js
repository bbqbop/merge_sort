// MERGE SORT ALGORITHM

function mergeSort(array){
    if (array.length <= 1){
        return array
    }
        const mid = Math.floor(array.length / 2);
        const left = mergeSort(array.slice(0, mid));
        const right = mergeSort(array.slice(mid));
        return merge(left, right);
}
function merge(left, right){
    const sortedArray = [];
    let leftIdx = 0;
    let rightIdx = 0;
    while (leftIdx < left.length && rightIdx < right.length){
        if (left[leftIdx] < right[rightIdx]){
            sortedArray.push(left[leftIdx]);
            leftIdx++
        }
        else {
            sortedArray.push(right[rightIdx]);
            rightIdx++;
        }
    }

    // console.log(`left: ${left}, right: ${right}, sorted: ${sortedArray.concat(left.slice(leftIdx)).concat(right.slice(rightIdx))}`)
    return sortedArray.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}

// TESTING
const testArray = [2,6,3,7,5,1,4];
const hughArray = (function(){
    const array = [];
    for (let i = 0; i < 100000; i++){
        array.push(Math.floor(Math.random() * 100000));
    }
    return array;
})();
console.log(mergeSort(testArray));
// console.log(mergeSort(hughArray));