function lockedProfile() {
    
}

async function showProfiles() {
    let main = document.getElementById('main');
    main.replaceChildren();

    let data = await getProfiles();

    for (let profile of data) {
        let div = createProfileElement(profile.username, profile.email, profile.age);
        main.appendChild(div);
    }
}

showProfiles();

function showHideMore(ev) {
    let profile = ev.target.parentElement;

    let radioButtons = profile.querySelectorAll('input[name="user1Locked"]');
    
    let isLocked = radioButtons[0].checked;


    if (isLocked || (!isLocked && !radioButtons[1].checked)) {
        return;
    }
    
    
    let hiddenField =  profile.querySelector('.user1Username');

    if (hiddenField.style.display == 'block') {
        hiddenField.style.display = 'none';
        ev.target.textContent = 'Show more';
    }
    else {
        hiddenField.style.display = 'block';
        ev.target.textContent = 'Hide it'; 
    }

}

function createProfileElement(username, email, age) {
    let profileDiv = document.createElement('div');
    profileDiv.className = 'profile';
  
    // Create the img element for the user icon
    let img = document.createElement('img');
    img.src = './iconProfile2.png';
    img.className = 'userIcon';
    profileDiv.appendChild(img);
  
    // Create the "Lock" label and radio button
    const lockLabel = document.createElement('label');
    lockLabel.textContent = 'Lock';
    profileDiv.appendChild(lockLabel);
  
    const lockRadio = document.createElement('input');
    lockRadio.type = 'radio';
    lockRadio.name = 'user1Locked';
    lockRadio.value = 'lock';
    lockRadio.checked = true;
    profileDiv.appendChild(lockRadio);
  
    // Create the "Unlock" label and radio button
    const unlockLabel = document.createElement('label');
    unlockLabel.textContent = 'Unlock';
    profileDiv.appendChild(unlockLabel);
  
    const unlockRadio = document.createElement('input');
    unlockRadio.type = 'radio';
    unlockRadio.name = 'user1Locked';
    unlockRadio.value = 'unlock';
    profileDiv.appendChild(unlockRadio);
  
    // Create the line break
    const br1 = document.createElement('br');
    profileDiv.appendChild(br1);
  
    // Create the horizontal rule
    const hr1 = document.createElement('hr');
    profileDiv.appendChild(hr1);
  
    // Create the "Username" label
    const usernameLabel = document.createElement('label');
    usernameLabel.textContent = 'Username';
    profileDiv.appendChild(usernameLabel);
  
    // Create the username input field
    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.name = 'user1Username';
    usernameInput.value = username;
    usernameInput.disabled = true;
    usernameInput.readOnly = true;
    profileDiv.appendChild(usernameInput);
  
    // Create the div for additional user info with class "user1Username"
    const userInfoDiv = document.createElement('div');
    userInfoDiv.className = 'user1Username';
    profileDiv.appendChild(userInfoDiv);
    userInfoDiv.style.display = 'none';
  
    // Create the horizontal rule inside userInfoDiv
    const hr2 = document.createElement('hr');
    userInfoDiv.appendChild(hr2);
  
    // Create the "Email:" label and email input
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    userInfoDiv.appendChild(emailLabel);
  
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'user1Email';
    emailInput.value = email;
    emailInput.disabled = true;
    emailInput.readOnly = true;
    userInfoDiv.appendChild(emailInput);
  
    // Create the "Age:" label and age input
    const ageLabel = document.createElement('label');
    ageLabel.textContent = 'Age:';
    userInfoDiv.appendChild(ageLabel);
  
    const ageInput = document.createElement('input');
    ageInput.type = 'number';
    ageInput.name = 'user1Age';
    ageInput.value = age;
    ageInput.disabled = true;
    ageInput.readOnly = true;
    userInfoDiv.appendChild(ageInput);
  
    // Create the "Show more" button
    const showMoreButton = document.createElement('button');
    showMoreButton.textContent = 'Show more';
    showMoreButton.addEventListener('click', showHideMore);
    profileDiv.appendChild(showMoreButton);
  
    return profileDiv;
  }

async function getProfiles() {
    let res = await fetch('http://localhost:3030/jsonstore/advanced/profiles');

    if (!res.ok) {
        alert('Request error');
        throw new Error('Request error');
    }

    let data = await res.json();

    return Object.values(data);
}