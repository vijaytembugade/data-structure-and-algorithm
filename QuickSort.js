function swap(array, i ,j){
  let temp = array[i];
  array[i]= array[j]
  array[j] = temp
}
function pivot(array, pivotIndex=0, endIndex = array.length-1){
  let swapIndex = pivotIndex;
  for(let i = pivotIndex+1; i<= endIndex; i++){
    if(array[i] < array[swapIndex]){
      swapIndex++;
      swap(array, swapIndex,i)
    }
  }
    swap(array, pivotIndex, swapIndex)
}

function quickSort(array, left=0, right=array.length - 1){
  if(left < right){
    let pivotIndex = pivot(array, left, right)
    quickSort(array, left, pivotIndex-1)
    quickSort(array, pivotIndex+1, right)
  }
  return array
}

console.log(quickSort([2,5,9,6,78,25,68,14,2,3,6,17]))