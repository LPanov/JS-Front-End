function addSubstract(num1, num2, num3) {
    function sum(n1, n2) {
        return n1+n2;
    }
    
    function substract(n3) {
        return sum(num1, num2) - n3;
    }

    console.log(substract(num3));
}




addSubstract(23,
    6,
    10
    )