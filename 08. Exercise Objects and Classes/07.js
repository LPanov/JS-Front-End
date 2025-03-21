function oddOccurrences(string) {
    let words = string.split(' ');

    let obj = {};

    words.forEach(word => obj[word.toLowerCase()] = 0);

    for (let word of words) {
        let currentWord = word.toLowerCase();
        if (obj.hasOwnProperty(currentWord)) {
            obj[currentWord]++;
        }
    }


    let entries = Object.entries(obj);
    let output = '';
    for (let [key, value] of entries) {
        if (Number(value) % 2 != 0) {
            output += key + ' ';
        }
    }

    console.log(output);

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');