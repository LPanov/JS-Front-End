let loadBtn = document.getElementById('load-orders');
let orderBtn = document.getElementById('order-btn');
let editBtn = document.getElementById('edit-order');

let list = document.getElementById('list');

loadBtn.addEventListener('click', onLoad);
orderBtn.addEventListener('click', onOrder);
editBtn.addEventListener('click', onEdit);

async function onEdit(ev) {
    ev.preventDefault();

    let name = document.getElementById('name');
    let quantity = document.getElementById('quantity');
    let date = document.getElementById('date');
    let _id = editBtn.dataset.id;

    await updateOrder(_id, name.value, quantity.value, date.value);

    document.querySelector('form').reset();

    orderBtn.disabled = false;;
    editBtn.disabled = true;

    onLoad();
    
}

async function onOrder(ev) {
    ev.preventDefault();

    let name = document.getElementById('name');
    let quantity = document.getElementById('quantity');
    let date = document.getElementById('date');

    if (!name.value || !quantity.value || !date.value) {
        return;
    }

    await postOrder(name.value, quantity.value, date.value);

    document.querySelector('form').reset();

    onLoad();
}

async function onLoad() {
    let orders = await getOrders();

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    for (let order of orders) {
        let container = createContainer(order, order.name, order.quantity, order.date);

        list.appendChild(container);
    }

    editBtn.disabled = true;

}

async function onDone(orderId) {
    await deleteOrderById(orderId);

    onLoad();
}

function onChange(order, record, name, date, quantity) {
    document.getElementById('name').value = name;
    document.getElementById('quantity').value = quantity;
    document.getElementById('date').value = date;
    editBtn.dataset.id = order._id;

    list.removeChild(record);

    orderBtn.disabled = true;
    editBtn.disabled = false;
}

function createContainer(order, name, date, quantity) {
    // Create the main container div
    let containerDiv = document.createElement('div');
    containerDiv.classList.add('container');
    
    // Create the h2 element for "Glasses"
    let glassesHeading = document.createElement('h2');
    glassesHeading.textContent = name;
    
    // Create the first h3 element for the date
    let dateHeading = document.createElement('h3');
    dateHeading.textContent = date;
    
    // Create the second h3 element for the number
    let numberHeading = document.createElement('h3');
    numberHeading.textContent = quantity;
    
    // Create the "Change" button
    let changeButton = document.createElement('button');
    changeButton.classList.add('change-btn');
    changeButton.textContent = 'Change';
    changeButton.addEventListener('click', () => (onChange(order, containerDiv, name, quantity, date)));
    
    // Create the "Done" button
    let doneButton = document.createElement('button');
    doneButton.classList.add('done-btn');
    doneButton.textContent = 'Done';
    doneButton.addEventListener('click',() => (onDone(order._id)));
    
    // Append all the elements to the container div
    containerDiv.appendChild(glassesHeading);
    containerDiv.appendChild(dateHeading);
    containerDiv.appendChild(numberHeading);
    containerDiv.appendChild(changeButton);
    containerDiv.appendChild(doneButton);
    
    // Return the created container element
    return containerDiv;
    
}

async function getOrders() {
    let res = await fetch('http://localhost:3030/jsonstore/orders');

    if (res.status == 204) {
        return [];
    }

    let data = await res.json();
    return Object.values(data);
}

async function postOrder(name, quantity, date) {
    let record = {
        name,
        quantity,
        date
    };

    let option =  {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(record) // Convert JavaScript object to JSON string
      };

      await fetch('http://localhost:3030/jsonstore/orders', option);
}

async function  deleteOrderById(orderId) {
    await fetch('http://localhost:3030/jsonstore/orders/' + orderId, {method: 'DELETE'})
}

async function updateOrder(_id, name, quantity, date) {
    let record = {
        _id,
        name,
        quantity,
        date
    };

    let option =  {
        method: 'PUT',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(record) // Convert JavaScript object to JSON string
      };

      await fetch('http://localhost:3030/jsonstore/orders/' + _id, option);
    
}