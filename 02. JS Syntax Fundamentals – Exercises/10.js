function sameNumbers(number) {
    let sum = Number(String(number).charAt(0));
    let areSame = true;
    
    if (String(number).length > 1) {
        for(let i = 1; i < String(number).length; i++) {
            if (String(number).charAt(i) != String(number).charAt(i-1)) {
                areSame = false;
                // console.log(i-1 + ' ' + i);
            }
    
            sum += Number(String(number).charAt(i));
        }
    }
    

    console.log(areSame);
    console.log(sum);
}

sameNumbers(2222222);