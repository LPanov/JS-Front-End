function modernTimesOfHashTag(arr) {
    let sentence = arr.split(" ");

    let output = [];

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].match("#[a-z]+")) {
            console.log(sentence[i].slice(1));
        }
    }
} 

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');