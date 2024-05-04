function logItems(n){
    for(let i=0; i< n; i++){
        console.log(i);
    }
}

logItems(10); 
// it will console 0 to 9 
// This logItems in O(n) operation;



function twoForLoop(){
    for(let i=0; i< n; i++){
        console.log(i);
    }

    for(let j=0; j< n; j++){
        console.log(j);
    }
}

twoForLoop(n)
/*This is O(2n) operation because two for loops run inside the function.
But we should drop the constant in time complexity. so the complexity become O(n)
*/