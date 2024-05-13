// Classes are blueprint of an Object

// In JS we have classes which is as below: 

class Cookie {
    // each class have constructor which defines the properties of class
    constructor(color){
        // constructor takes the value which we can assign to the refrence of that created object
        this.color = color;
        // value of this here is depends on how we call the class and create the object
    }

    /* we can also add methods inside the class as below
    * For this example we will create a methods which are get and set color to the coockie.
    */ 
 
    getColor(){
        return this.color;
    }

    setColor(color){
        this.color = color;
    }
}

const cookieOne = new Cookie('red')
/**
 * coockieOne will have one property which is 'color' and value will be 'red'
 */

const cookieTwo = new Cookie('blue')
/**
 * coockieTwo will have one property which is 'color' and value will be 'blue',
 * And by doing this we can make this code reusable and 
 */


// We can access the methods inside of object as shown below;
cookieOne.getColor() // output : red
cookieTwo.setColor('orage'); // it will set color to cookieTwo
cookieTwo.getColor() // output: orange