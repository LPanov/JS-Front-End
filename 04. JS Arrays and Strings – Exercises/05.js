function revealWords(arr1, arr2) {
    let words = arr1.split(", ");
    let sentence = arr2.split(" ");

    let output = '';


    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].startsWith('*')) {
            for (let j = 0; j < words.length; j++) {
                if (sentence[i].length == words[j].length) {
                    output += words[j] + ' ';
                }
            }
        }
        else output += sentence[i] + ' ';
    }

    console.log(output);
}

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');