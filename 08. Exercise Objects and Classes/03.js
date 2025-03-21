function storeProvision(stock, ordered) {
    let products = {};

    for (let i = 0; i < stock.length; i+=2) {
        products[stock[i]] = Number(stock[i+1]);
    }

    for (let i = 0; i < ordered.length; i+=2) {
        if (ordered[i] in products) {
            products[ordered[i]] += Number(ordered[i+1]);
        } else {
            products[ordered[i]] = Number(ordered[i+1]);
        }
        
    }

    let entries = Object.entries(products);
    for (let [key, value] of entries) {
        console.log(key + ' -> ' + value);
    }
} 

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );

storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
    );