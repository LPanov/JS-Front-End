function priceStay(n, type, day) {
    let price;

    if (type == 'Students') {
        if (day == 'Friday') {
            price = n * 8.45;
        }
        else if (day == 'Saturday') {
            price = n * 9.8;
        }
        else if (day == 'Sunday') {
            price = n * 10.46;
        }

        if (n >= 30 ) {
            price *= 0.85;
        }
    }
    else if (type == 'Business') {
        if (n >= 100) {
            n -= 10;
        }

        if (day == 'Friday') {
            price = n * 10.9;
        }
        else if (day == 'Saturday') {
            price = n * 15.6;
        }
        else if (day == 'Sunday') {
            price = n * 16;
        }
    }
    else if (type == 'Regular') {
        if (day == 'Friday') {
            price = n * 15;
        }
        else if (day == 'Saturday') {
            price = n * 20;
        }
        else if (day == 'Sunday') {
            price = n * 22.50;
        }

        if (n >= 10 && n <= 20) {
            price *= 0.95;
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}