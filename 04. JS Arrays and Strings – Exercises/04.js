function sortingNumbers(numbers) {
    const alphabetically = [];
    for (let i =0; i < numbers.length; i++) {
        alphabetically[i] = numbers[i];
    }

    alphabetically.sort((a, b) => a - b);
    const descendent = [];
    for (let i =0; i < numbers.length; i++) {
        descendent[i] = numbers[i];
    }
    descendent.sort((a, b) => b - a);

    let output = [];

    let i = 0;
    if (alphabetically.length > 1) {
        while(true) {
        

            output.push(alphabetically[i]);
    
    
            output.push(descendent[i]);
            
            if (alphabetically.length/2 - 1  == i) {
                break;
            }
    
            i++;
        }
    }
    else output = alphabetically;
   

    return output;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));