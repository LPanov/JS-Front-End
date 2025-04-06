async function loadStudents() {
    let table = document.querySelector('tbody');
    table.replaceChildren();

    let students = await getStudents();

    for (let student of students) {
        let tr = document.createElement('tr');

        let firstNameCol = document.createElement('td');
        let lastNameCol = document.createElement('td');
        let FNCol = document.createElement('td');
        let gradeCol = document.createElement('td');

        firstNameCol.textContent = student.firstName;
        lastNameCol.textContent = student.lastName;
        FNCol.textContent = student.facultyNumber;
        gradeCol.textContent = student.grade;

        tr.appendChild(firstNameCol);
        tr.appendChild(lastNameCol);
        tr.appendChild(FNCol);
        tr.appendChild(gradeCol);

        table.append(tr);
    }

    document.getElementById('submit').addEventListener('click', onSubmit);
}

loadStudents();

async function onSubmit(ev) {
    ev.preventDefault();
    
    let firstName = document.getElementsByName('firstName')[0].value;
    let lastName = document.getElementsByName('lastName')[0].value;
    let facultyNumber = document.getElementsByName('facultyNumber')[0].value;
    let grade = document.getElementsByName('grade')[0].value;

    if (!firstName || !lastName || !facultyNumber || !grade) {
        return;
    }

    await postStudent(firstName, lastName, facultyNumber, grade);

    loadStudents();
}

async function getStudents() {
    let res = await fetch('http://localhost:3030/jsonstore/collections/students');

    if (!res.ok) {
        alert('Request error');
        throw new Error('Request error');
    }

    let data = await res.json();

    return Object.values(data);
}

async function postStudent(firstName, lastName, facultyNumber, grade ) {
    let student = {
        firstName,
        lastName,
        facultyNumber,
        grade
    };

    let option =  {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(student) // Convert JavaScript object to JSON string
      };

      await fetch('http://localhost:3030/jsonstore/collections/students', option);
}