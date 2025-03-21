function piccolo(plates) {
    let carsIn = new Set();

    for (let i = 0; i < plates.length; i++) {
        let commands = plates[i].split(', ');
        if (commands[0] == 'IN') {
            carsIn.add(commands[1]);
        } else if (commands[0] == 'OUT'){
            carsIn.delete(commands[1]);
        }

    }

    if (carsIn.size == 0) {
        console.log('Parking Lot is Empty');
    } else {
        let sortedCars = Array.from(carsIn).sort((a, b) => a.localeCompare(b));
        sortedCars.forEach(car => console.log(car));
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
    );

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
    );