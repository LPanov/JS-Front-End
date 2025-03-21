function towns(data) {
    let objects = [];

    for (info of data) {
        let words = info.split(' | ');
        // console.log(`${words[0]} -> ${words[1]} -> ${words[2]}`);
        let myObj = {
            town: words[0],
            latitude: Number(words[1]).toFixed(2),
            longitude: Number(words[2]).toFixed(2)
        };

        objects.push(myObj);
    }

    for (obj of objects) {
        console.log(obj);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    );

towns(['Plovdiv | 136.45 | 812.575']);