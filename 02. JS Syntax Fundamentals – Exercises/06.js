function sumDigits(number) {
    let sum = 0;
    for(let i = 0; i < String(number).length; i++) {
        sum += Number(String(number).charAt(i));
    }

    console.log(sum);
}

sumDigits(543);