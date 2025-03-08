function factorialDivision(num1, num2) {
    function factorial(n) {
        if (n <= 1) {
            return 1;
        }
        else {
            return n*factorial(n-1);
        }
    }

    let output = factorial(num1)/factorial(num2);
    console.log(output.toFixed(2));
}



factorialDivision(5, 2);
factorialDivision(6, 2);
factorialDivision(8, 3);