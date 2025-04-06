function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', onLoad);
    document.getElementById('btnCreate').addEventListener('click', onCreate);
}

attachEvents();

async function onLoad() {
    let phonebook = document.getElementById('phonebook');
    phonebook.replaceChildren();

    let phones = await loadPhones();
    for (let phone of phones) {
        let li = document.createElement('li');
        let delBtn = document.createElement('button');

        li.textContent = `${phone.person}: ${phone.phone}`;
        delBtn.textContent = 'Delete';

        delBtn.addEventListener('click', () => onDelete(li, phone._id));

        li.appendChild(delBtn);
        phonebook.appendChild(li);
        
    }
}

async function onCreate() {
    let person = document.getElementById('person');
    let phone = document.getElementById('phone');

    if (!person || !phone) {
        return;
    }

    await postPhone(person.value, phone.value);

    person.value = '';
    phone.value = '';

    onLoad();
}

async function onDelete(row, phoneId) {
    await deletePhoneById(phoneId);
    row.remove();
}

async function loadPhones() {
    let res = await fetch('http://localhost:3030/jsonstore/phonebook');

    if (!res.ok) {
        alert('Request error');
        throw new Error('Request error');
    }

    let data = await res.json();

    return Object.values(data);

}

async function postPhone(person, phone) {
    let phoneNumber = {
        person,
        phone
    };

    let option =  {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(phoneNumber) // Convert JavaScript object to JSON string
      };

      await fetch('http://localhost:3030/jsonstore/phonebook', option);
}

async function deletePhoneById(phoneId) {
    await fetch('http://localhost:3030/jsonstore/phonebook/' + phoneId, {method: 'DELETE'});

}