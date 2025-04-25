let loadBtn = document.getElementById('load-history');
let addBtn = document.getElementById('add-reservation');
let editBtn = document.getElementById('edit-reservation');

let list = document.getElementById('list');

loadBtn.addEventListener('click', onLoad);
addBtn.addEventListener('click', onAdd);
editBtn.addEventListener('click', onEdit);

async function onLoad() {
    let reservations = await getReservations();

    // while (list.firstChild) {
    //     list.removeChild(list.firstChild);
    // }

    for (let reservation of reservations) {
        let container = createReservationElement(reservation, reservation.names, reservation.days, reservation.date);

        list.appendChild(container);
    }

    editBtn.disabled = true;
}

async function onAdd() {

    let names = document.getElementById('names');
    let days = document.getElementById('days');
    let date = document.getElementById('date');

    if (!names.value || !days.value || !date.value) {
        return;
    }

    await postReservation(names.value, days.value, date.value);

    document.querySelector('form').reset();

    onLoad();
}

async function onEdit() {
    let names = document.getElementById('names');
    let days = document.getElementById('days');
    let date = document.getElementById('date');
    let _id = editBtn.dataset.id;

    await updateReservation(_id, names.value, days.value, date.value);

    document.querySelector('form').reset();

    addBtn.disabled = false;;
    editBtn.disabled = true;

    onLoad();
}

function onChange(reservation, record, names, days, date) {
    document.getElementById('names').value = names;
    document.getElementById('days').value = days;
    document.getElementById('date').value = date;
    editBtn.dataset.id = reservation._id;

    list.removeChild(record);

    addBtn.disabled = true;
    editBtn.disabled = false;
}

async function onDelete(reservationId) {
    await deleteReservationById(reservationId);

    onLoad();
}

function createReservationElement(entry, names, days, date) {
    let containerDiv = document.createElement('div');
    containerDiv.className = 'container';

    let nameHeading = document.createElement('h2');
    nameHeading.textContent = names;

    let dateHeading = document.createElement('h3');
    dateHeading.textContent = date;

    let daysHeading = document.createElement('h3');
    daysHeading.id = 'reservation_days';
    daysHeading.textContent = days;

    let buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'buttons-container';

    let changeButton = document.createElement('button');
    changeButton.className = 'change-btn';
    changeButton.textContent = 'Change';
    changeButton.addEventListener('click', () => (onChange(entry, containerDiv, names, days, date)));

    let deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click',() => (onDelete(entry._id)));

    buttonsContainer.appendChild(changeButton);
    buttonsContainer.appendChild(deleteButton);

    containerDiv.appendChild(nameHeading);
    containerDiv.appendChild(dateHeading);
    containerDiv.appendChild(daysHeading);
    containerDiv.appendChild(buttonsContainer);

    return containerDiv;
}

async function getReservations() {
    let res = await fetch('http://localhost:3030/jsonstore/reservations');

    if (res.status == 204) {
        return [];
    }

    let data = await res.json();
    return Object.values(data);
}

async function postReservation(names, days, date) {
    let record = {
        names,
        days,
        date
    };

    let option =  {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(record) // Convert JavaScript object to JSON string
      };

      await fetch('http://localhost:3030/jsonstore/reservations', option);
}

async function  deleteReservationById(reservationId) {
    await fetch('http://localhost:3030/jsonstore/reservations/' + reservationId, {method: 'DELETE'})
}

async function updateReservation(_id, names, days, date) {
    let record = {
        _id,
        names,
        days,
        date
    };

    let option =  {
        method: 'PUT',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(record) // Convert JavaScript object to JSON string
      };

      await fetch('http://localhost:3030/jsonstore/reservations/' + _id, option);
    
}