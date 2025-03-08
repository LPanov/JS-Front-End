function charsInRange(ch1, ch2) {
    let output = [];

    for (let i = ch1.charCodeAt(0) + 1; i < ch2.charCodeAt(0); i++) {
        output.push(String.fromCharCode(i) + ' ');
    }

    if (output.length > 0) console.log(output.join(''));

    if (output.length == 0) {
        for (let i = ch2.charCodeAt(0) + 1; i < ch1.charCodeAt(0); i++) {
            output.push(String.fromCharCode(i) + ' ');
        }

        console.log(output.join('')); 
    }
     
}

charsInRange('a',
'd'
);

charsInRange('#',
':'
);

charsInRange('C',
'#'
);