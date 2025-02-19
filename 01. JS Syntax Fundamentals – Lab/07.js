function solve(type, age) {
    let price;

    if (type == 'Weekday') {
        if (age >= 0 && age <= 18) {
            price = 12;
        }
        else if (age > 18 && age <= 64) {
            price = 18;
        }
        else if (age > 64 && age <= 122) {
            price = 12;
        }
        else {
            price = 'Error!'
        }
    }

    else if (type == 'Weekend') {
        if (age >= 0 && age <= 18) {
            price = 15;
        }
        else if (age > 18 && age <= 64) {
            price = 20;
        }
        else if (age > 64 && age <= 122) {
            price = 15;
        }
        else {
            price = 'Error!'
        }
    }
    else if (type == 'Holiday') {
        if (age >= 0 && age <= 18) {
            price = 5;
        }
        else if (age > 18 && age <= 64) {
            price = 12;
        }
        else if (age > 64 && age <= 122) {
            price = 10;
        }
        else {
            price = 'Error!'
        }
    }
    else {
        price = 'Error!'
    }

    if (price != "Error!") {
        price += '$';
    }

    console.log(price);
}

solve('Weekday', 42);