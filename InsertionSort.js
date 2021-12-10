function insertionSort(array){
  let temp;
  for(let i= 1; i< array.length; i++){
    temp = array[i]
    for(var j = i - 1; array[j] > temp && j > -1; j-- ){
      array[j+1] = array[j]
    }
    array[j+1]= temp
  }
  return array
}

console.log(insertionSort([1,2,3,8,5,6,4,9,2,3,5,4,6]))