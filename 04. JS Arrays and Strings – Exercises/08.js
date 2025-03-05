function pascalCaseSplitter(str) {
    let output = '';

    for (let i = 0; i < str.length; i++) {

        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90 && i > 0) {
            output += ', ';
            
        }

        output += str.at(i); 
    }

    console.log(output);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');