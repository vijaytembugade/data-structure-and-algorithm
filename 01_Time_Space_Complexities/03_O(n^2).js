function logItems(){
    for(let i=0; i< n; i++){
        for(let j=0; j< n; j++){
            console.log(i,j);
        }
    }
}

logItems(10)

/*
Time complexity of this function here is O(n).
If TC of any function is O(n^2 + n) the it is considered as O(n^2), 
here we drop the non dominant value.
 */
