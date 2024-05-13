const obj1 = {
    value : "some value",
}

const obj2 = obj1;


/**
 * In above example obj1 and obj2 are pointing to same memory location i.e they have same pointer of data.
 * So, we we update obj1 , then obj2 will also get updated.
 */

console.log(obj1.value) // some value

console.log(obj2.value) // some value 

obj2.value = 'different value'

console.log(obj1.value) // different value

console.log(obj2.value) // different value