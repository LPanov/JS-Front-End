function palindromeCheck(numbers) {
    function reverse(num) {
        let reversed = '';

        for (let i = String(num).length - 1; i >= 0; i--) {
            reversed += String(num).charAt(i);
        }

        return reversed;
    }

    numbers.forEach((number) => {
        if (String(number) == reverse(number)) {
            console.log(true);
        } else {
            console.log(false);
        }
    });
}

palindromeCheck([123,323,421,121]);