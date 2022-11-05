/*An object which implements the literable protocol is called an literable

For an object to be an iterable it must implement a method at the key [Symbol.iterator]

That method should not accept any argument and should return an object which conforms to the iterator protocol */
  

/* The iterator protocol

The iterator protocol decides whether an object is an iterator

The object must have a next() method that returns an object with two properties

value: which gives the current element
done: which is a boolean value indicating whether or not there are any more elements that could be iterated upon */

const obj1 = {
    [Symbol.iterator] : function () {
        let step = 0;
        const obj2 = {
            next : function () {
                step++;
                if(step == 1) {
                    return {value: "Hello", done : false};
                }
                else if (step == 2) {
                    return {value: "World", done: false}
                }
                return {value: undefined, done: true}
            },
        };
        return obj2;
    }
}

for (const word of obj1){
    console.log(word);
}

