function employess(data) {
    let myObj = {};

    for (d of data) {
        myObj[d] = d.length;
    }

    let entries = Object.entries(myObj);
    for (entry of entries) {
        console.log(`Name: ${entry[0]} -- Personal Number: ${entry[1]} `);
    }
}

employess([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );

employess([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    );