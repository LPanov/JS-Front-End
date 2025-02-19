function printAndSum(start, end) {
    let sequence = '';
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sequence += `${i} `;
        sum += i;
    }

    console.log(sequence);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);