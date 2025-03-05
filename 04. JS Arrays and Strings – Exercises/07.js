function stringSubstring(word, sentence) {
    let arr = sentence.split(" ");

    let found = false;

    for (let i = 0; i < arr.length; i++) {
        if (word.toUpperCase() == arr[i].toUpperCase()) {
            found = true;
            break;
        }
    }

    if (found) {
        console.log(word);
    }
    else {
        console.log(word + ' not found!');
    }
}