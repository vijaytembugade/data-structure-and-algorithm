function logItems(a, b){
    for(let i=0; i< a; i++){
        console.log(i);
    }

    for(let j=0; j< b; j++){
        console.log(j);
    }
}

/**
 * So what will the TC for above function,
 * First iteration is of O(a) and Second iteration is of O(b);
 * So, TC will be O(a+b);
 * Make sure it is not directly O(2n).
 */



function logItems2(a, b){
    for(let i=0; i< a; i++){
        for(let j=0; j< b; j++){
            console.log(i,j);
        }
    }
}

/**
 * Similar things also get applies to this perticular nested loops.
 * Here TC will be O(a*b)
 * its not O(n^2)
 */