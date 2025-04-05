function solve() {
    let input = Number(document.getElementById('input').value);
    let output = document.getElementById('result');

    let option = document.getElementById('selectMenuTo');

    if (option.value == 'binary') {
        output.value = input.toString(2);
    }
    else if (option.value == 'hexadecimal') {
        output.value = input.toString(16).toUpperCase();
    }
}