
function cookingByNumbers(num, op1, op2, op3, op4, op5) {
    let number = Number(num);
    let operations = [op1, op2, op3, op4, op5];
    
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] == 'chop') {
            number /= 2;
        }
        else if (operations[i] == 'dice') {
            number = Math.sqrt(number);
        }
        else if (operations[i] == 'spice') {
            number++;
        }
        else if (operations[i] == 'bake') {
            number *= 3;
        }
        else if (operations[i] == 'fillet') {
            number *= 0.8;
        }
        console.log(number);
    }
}