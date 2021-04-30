// main function
const cleanRoom = (array) => {
    // will hold digits from the array
    let digitArray = [];
    // will hold chars from the array
    let charArray = [];

    /* first loop through all input array values assigning a value to the digits array or the
    letters array. */
    for (element of array) {
        if (typeof (element) === 'number') {
            digitArray.push(element);
        } else {
            charArray.push(element)
        }
    }

    // sort each array into proper order.
    digitArray = digitArray.sort((a, b) => a - b);
    charArray = charArray.sort();

    // create a function that returns a "nested" array for each value (An array of arrays).
    return processArray(digitArray, charArray);
}

// takes the arrays combines them
const processArray = (array1, array2) => {
    let count = 0;
    let combinedArray = [...array1, ...array2];
    // console.log("Checking arrays are sorted and properly combined: ", combinedArray); 

    // holds all nested arrays to be returned
    let finalArray = [];
    let currentVal = 0;

    /* this loop creates nested arrays with digits of the same value. The inner while 
    loop counts through numbers that identical to the first value. It then slices those 
    identical values and pushes them into finalArray as a nested array. It then splices 
    those values from the original ready for the next while loop iteration. In the next 
    loop cycle currenVal points to the new value at the start of the array */

    while (count < combinedArray.length) {
        // stores the value at the "latest" first position of the array
        currentVal = combinedArray[0];
        count++;

        // counts identical values
        while (currentVal === combinedArray[count]) {
            count++
        }

        // pushes a nested array into finalArray
        finalArray.push(combinedArray.slice(0, count));

        // chops off the first group of identical values ready for next loop cycle 
        combinedArray.splice(0, count);
        count = 0;
    }
    return finalArray;
}

const modifiedArray = cleanRoom([1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20, 'c', 'b', 'b', 'a']);

console.log("New array is: ", modifiedArray);