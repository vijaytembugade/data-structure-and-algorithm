function selectionSort(array){
    let min;
    for (let i = 0; i < array.length - 1; i++){
        min = i
        for(let j = i+1; j < array.length; j++){
            if(array[i] > array[j]){
                min = j
            }
        }
        if(min !== i){
            let temp = array[i]
            array[i] =array[min]
            array[min] =temp  
        }
    }
    console.log(array)
    return array
}

selectionSort([1,10,5,6,3,12,78,12,125,100,2])