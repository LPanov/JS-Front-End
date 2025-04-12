window.addEventListener("load", solve);

function solve() {
  let preview = document.getElementById('preview-list');
  let submit = document.getElementById('next-btn').addEventListener('click', onSubmit);

  function onSubmit(ev) {
    ev.preventDefault();
  
    let email = document.getElementById('email');
    let event = document.getElementById('event');
    let location = document.getElementById('location');

    if (!email || !event || !location) {
      return;
    }

    preview.appendChild(createLi(email.value, event.value, location.value));
    this.disabled = true;
    email.value = '';
    event.value = '';
    location.value = '';
  }

  function onEdit() {
    let email = document.getElementById('email');
    let event = document.getElementById('event');
    let location = document.getElementById('location');

    email.value = document.querySelector('article h4').textContent;
    event.value = document.querySelector('article p').textContent.split(':')[1];
    location.value = document.querySelector('article p:last-of-type').textContent.split(':')[1];

    document.getElementById('next-btn').disabled = false;
    preview.removeChild(preview.firstChild);
    
  }
  
  function onApply() {
    let events = document.getElementById('event-list');
    let event = document.querySelector('#preview-list li');

    event.removeChild(event.querySelector('button'));
    event.removeChild(event.querySelector('button'));
    
    document.getElementById('next-btn').disabled = false;
    preview.removeChild(preview.firstChild);
    events.appendChild(event);
  }


  function createLi(email, eventName, locationName) {
    let listItem = document.createElement('li');
    listItem.classList.add('application');
  
    let article = document.createElement('article');
  
    let emailHeading = document.createElement('h4');
    emailHeading.textContent = email;
  
    let eventParagraph = document.createElement('p');
    let eventStrong = document.createElement('strong');
    eventStrong.textContent = 'Event:';
    let eventBreak1 = document.createElement('br');
    let eventBreak2 = document.createElement('br');
    let eventText = document.createTextNode(`${eventName}`);
  
    eventParagraph.appendChild(eventStrong);
    eventParagraph.appendChild(eventBreak1);
    eventParagraph.appendChild(eventBreak2);
    eventParagraph.appendChild(eventText);
  
    let locationParagraph = document.createElement('p');
    let locationStrong = document.createElement('strong');
    locationStrong.textContent = 'Location:';
    let locationBreak1 = document.createElement('br');
    let locationBreak2 = document.createElement('br');
    let locationText = document.createTextNode(`${locationName}`);
  
    locationParagraph.appendChild(locationStrong);
    locationParagraph.appendChild(locationBreak1);
    locationParagraph.appendChild(locationBreak2);
    locationParagraph.appendChild(locationText);
  
    article.appendChild(emailHeading);
    article.appendChild(eventParagraph);
    article.appendChild(locationParagraph);
  
    listItem.appendChild(article);

    // Create the edit button
    const editBtn = document.createElement('button');
    editBtn.classList.add('action-btn', 'edit');
    editBtn.textContent = 'edit';
    editBtn.addEventListener('click', onEdit);
    
    // Create the apply button
    const applyBtn = document.createElement('button');
    applyBtn.classList.add('action-btn', 'apply');
    applyBtn.textContent = 'apply';
    applyBtn.addEventListener('click', onApply);

    // Append the buttons
    listItem.appendChild(editBtn);
    listItem.appendChild(applyBtn);
  
    return listItem;
  }
}
