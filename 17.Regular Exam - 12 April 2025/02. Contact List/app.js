window.addEventListener("load", solve);

function solve() {
    let addBtn = document.getElementById('add_btn');
    addBtn.addEventListener('click', onAdd);

    let firstName = document.getElementById('first_name');
    let lastName = document.getElementById('last_name');
    let phone = document.getElementById('phone');

    let pendingList = document.getElementById('pending_contact_list');
    let contactList = document.getElementById('contact_list');

    function onAdd(ev) {
        ev.preventDefault();

        if (firstName.value.trim() == '' || lastName.value.trim() == '' || phone.value.trim() == '') {
            return;
        }

        let li = createLi(firstName.value, lastName.value, phone.value);
        pendingList.appendChild(li);

        document.querySelector('form').reset();
    }

    function onEdit(li, firstName, lastName, phone) {
        document.getElementById('first_name').value = firstName;
        document.getElementById('last_name').value = lastName;
        document.getElementById('phone').value = phone;

        pendingList.removeChild(li);
    }

    function onVerify(li, firstName, lastName, phone) {
        pendingList.removeChild(li);

        let verifiedContact = createVerifiedContact(firstName, lastName, phone);
        contactList.appendChild(verifiedContact);
    }

    function onDelete(li) {
        contactList.removeChild(li);
    }

    function createVerifiedContact(firstName, lastName, phone) {
        let li = document.createElement('li');
        li.className = 'verified_contact';
      
        let nameSpan = document.createElement('span');
        nameSpan.className = 'names';
        nameSpan.textContent = `${firstName} ${lastName}`;
      
        let phoneSpan = document.createElement('span');
        phoneSpan.className = 'phone_number';
        phoneSpan.textContent = phone;
      
        let deleteButton = document.createElement('button');
        deleteButton.className = 'delete_btn';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => (onDelete(li)));
      
        li.appendChild(nameSpan);
        li.appendChild(phoneSpan);
        li.appendChild(deleteButton);
      
        return li;
      }

    function createLi(firstName, lastName, phone) {
        let li = document.createElement('li');
        li.className = 'contact';
      
        let nameSpan = document.createElement('span');
        nameSpan.className = 'names';
        nameSpan.textContent = firstName +' ' + lastName;
      
        let phoneSpan = document.createElement('span');
        phoneSpan.className = 'phone_number';
        phoneSpan.textContent = phone;
      
        let editButton = document.createElement('button');
        editButton.className = 'edit_btn';
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => (onEdit(li, firstName, lastName, phone)));
      
        let verifyButton = document.createElement('button');
        verifyButton.className = 'verify_btn';
        verifyButton.textContent = 'Verify';
        verifyButton.addEventListener('click', () => (onVerify(li, firstName, lastName, phone)));
      
        li.appendChild(nameSpan);
        li.appendChild(phoneSpan);
        li.appendChild(editButton);
        li.appendChild(verifyButton);
      
        return li;
      }
};
