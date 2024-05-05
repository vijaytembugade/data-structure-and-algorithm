There are few method in Javascript such are pre-defined in an array. 
We will see Time Complexities of those methods.  


### Array.push
- .push is O(1) operation because we are not looping or doing anything on array.
- We are not reindexing an array anywhere, we are adding element in an array at last index.

### Array.pop
- .pop is also O(1) operation.
- .pop doesnt perform any reindexing of elements inan array.

### Array.shift 
- .shift is method where we remove the first item of the array.
- .shift is O(n) operation.
- This is because we have to reindex the entire array , as we are remove first element from an array. 

### Array.unshift
- .unshift is method where , we add first element in an array.
-  .unshift is also O(n) operation.
- This is also because of reindexing of an array.

### Array.splice(startIndex, countOfItemsTobeDeleted, newAdditionalItem)
- .splice isO (n) operation. 
- In splice after addition or removal , we do reindexing. 

### Finding an item in an Array;
- FINDING BY VALUE 
    - It is O(n) operation , because, we iterate over the values 
- FINDING BY INDEX
    - It is O(1) operation.

### Array.includes
- It is O(n) operation

### Array.length 
- It is O(1) operation 
- It is because, array in JS have length property in it which is constant value. 
- [url for explanation](https://stackoverflow.com/questions/32850662/time-complexity-of-javascripts-array-length)