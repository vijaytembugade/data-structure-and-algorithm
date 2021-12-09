function bubleSort(array){
  for(let i = array.length - 1 ; i > 0; i-- ){
    for (let j = 0 ; j< i; j++){
      if(array[j] > array[j+1]){
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp
      }
    }
  }
  console.log(array)
  return array
}

bubleSort([4,5,6,8,2,1,7,3,45])