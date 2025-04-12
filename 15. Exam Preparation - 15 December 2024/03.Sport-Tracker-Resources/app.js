let host = 'http://localhost:3030/jsonstore/workout';
let loadBtn = document.getElementById('load-workout');
loadBtn.addEventListener('click', onLoad);
let list = document.getElementById('list');

let addBtn = document.getElementById('add-workout');
let editBtn = document.getElementById('edit-workout')

addBtn.addEventListener('click', onAdd);
editBtn.addEventListener('click', onEdit);

async function onAdd(params) {
    let name = document.getElementById('workout');
    let location = document.getElementById('location');
    let date = document.getElementById('date');

    if (name.value.trim() == '' || location.value.trim() == '' || date.value.trim() == '') {
        return;
    }

    console.log(name.value);

    await postWorkout(name.value, location.value, date.value);

    document.querySelector('form').reset();

    onLoad();
}

async function onEdit(params) {
    let name = document.getElementById('workout');
    let location = document.getElementById('location');
    let date = document.getElementById('date');
    let _id = editBtn.dataset.id;

    await updateWorkout(_id, name.value, location.value, date.value);

    document.querySelector('form').reset();

    addBtn.disabled = false;;
    editBtn.disabled = true;

    onLoad();
}

async function onLoad() {
    let workouts = await getWorkouts();

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    for (let workout of workouts) {
        let container = createContainer(workout, workout.workout, workout.location, workout.date);

        list.appendChild(container);
    }

    editBtn.disabled = true;
}

function onChange(entry, container, name, location, date) {
    list.removeChild(container);

    document.getElementById('workout').value = name;
    document.getElementById('location').value = location;
    document.getElementById('date').value = date;
    editBtn.dataset.id = entry._id;

    addBtn.disabled = true;
    editBtn.disabled = false;
}

async function onDone(workoutId) {
    await deleteWorkoutById(workoutId);

    onLoad();
}

function createContainer(entry, name, location, date) {
    // Create the main container div
    let containerDiv = document.createElement('div');
    containerDiv.classList.add('container');
  
    // Create the h2 element for the title
    let titleHeading = document.createElement('h2');
    titleHeading.textContent = name;
  
    // Create the h3 element for the date
    let dateHeading = document.createElement('h3');
    dateHeading.textContent = date;
  
    // Create the h3 element for the location
    let locationHeading = document.createElement('h3');
    locationHeading.id = 'location';
    locationHeading.textContent = location;
  
    // Create the buttons container div
    const buttonsContainerDiv = document.createElement('div');
    buttonsContainerDiv.id = 'buttons-container';
  
    // Create the "Change" button
    const changeButton = document.createElement('button');
    changeButton.classList.add('change-btn');
    changeButton.textContent = 'Change';
    changeButton.addEventListener('click', () => (onChange(entry, containerDiv, name, location, date)));
  
    // Create the "Done" button
    const doneButton = document.createElement('button');
    doneButton.classList.add('delete-btn');
    doneButton.textContent = 'Done';
    doneButton.addEventListener('click', () => (onDone(entry._id)));
  
    // Append the buttons to the buttons container
    buttonsContainerDiv.appendChild(changeButton);
    buttonsContainerDiv.appendChild(doneButton);
  
    // Append the headings and buttons container to the main container
    containerDiv.appendChild(titleHeading);
    containerDiv.appendChild(dateHeading);
    containerDiv.appendChild(locationHeading);
    containerDiv.appendChild(buttonsContainerDiv);
  
    return containerDiv;
  }

async function getWorkouts() {
    let res = await fetch(host);

    if (res.status == 204) {
        return [];
    }

    let data = await res.json();
    return Object.values(data);
}

async function postWorkout(workout, location, date) {
    let workoutObj = {
        workout,
        location,
        date
    };

    let option =  {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(workoutObj) // Convert JavaScript object to JSON string
      };

      await fetch(host, option);
}

async function  deleteWorkoutById(wokroutId) {
    await fetch(host + '/' + wokroutId, {method: 'DELETE'})
}

async function updateWorkout(_id, workout, location, date) {
    let record = {
        _id,
        workout,
        location,
        date
    };

    let option =  {
        method: 'PUT',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(record) // Convert JavaScript object to JSON string
      };

      await fetch(host + '/' + _id, option);
    
}
