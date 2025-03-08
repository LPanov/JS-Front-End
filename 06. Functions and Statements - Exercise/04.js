function oddEvenSum(number) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < String(number).length; i++) {
       if (Number(String(number).charAt(i)) % 2 == 0) {
            even += Number(String(number).charAt(i));
       } else {
            odd += Number(String(number).charAt(i));
       }
    }

    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}

oddEvenSum(1000435);
oddEvenSum(3495892137259234);