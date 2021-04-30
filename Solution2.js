/* this function takes an array of values of any size and a target number,
it then finds which "2" numbers sum to the target num (if any) */
let arraySum = (array, targetNum) => {
    let results = [];
    // search all possible combinations that add up to targetNum
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                if (array[i] + array[j] === targetNum) {
                    let temp = [];
                    // change the numerical order to smaller/higher values -
                    // i.e. 2, 4 not 4, 2
                    if (array[i] < array[j]) {
                        temp.push(array[i], array[j]);
                    } else {
                        temp.push(array[j], array[i]);
                    }
                    // push temp as a nested array to the results 
                    results.push(temp);
                }
            }
        }
    }
    // create a set with no duplicate pairs
    results.forEach((chunk, index) => {
        results[index] = JSON.stringify(chunk);
    });

    results = [...new Set(results)];

    results.forEach((chunk, index) => {
        results[index] = JSON.parse(chunk);
    });

    // then return the final result
    return results;
}

const combinations = arraySum([1, 2, 3, 3, 4, 5, 6, 6, 7, 8], 12);
//const combinations = arraySum([3, 0], 8);

if (combinations.length === 0) {
    console.log("No sums are possible with given input");
} else {
    for (sum of combinations) {
        console.log(`${sum[0]} + ${sum[1]} = ${sum[0] + sum[1]}`);
    }
}