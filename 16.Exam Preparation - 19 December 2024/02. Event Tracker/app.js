window.addEventListener("load", solve);

function solve(){
    let list = document.getElementById('upcoming-list');
    let save = document.getElementById('save');
    save.addEventListener('click', onSave);

    let event = document.getElementById('event');
    let note = document.getElementById('note');
    let date = document.getElementById('date');

    let deleteBtn = document.querySelector('#events button');
    deleteBtn.addEventListener('click', onDelete);

    function onDelete() {
        let eventsList = document.getElementById('events-list');
        while (eventsList.firstChild) {
            eventsList.removeChild(eventsList.firstChild);
        }
    }

    function onSave(ev) {
        ev.preventDefault();

        if (event.value.trim() == '' || note.value.trim() == '' || date.value.trim() == '') {
            return;
        }

        let li = createEventItem(event.value, note.value, date.value);
        list.appendChild(li);

        document.querySelector('form').reset();
    }

    function onEdit(element, name, note, date) {

        document.getElementById('event').value = name;
        document.getElementById('note').value = note;
        document.getElementById('date').value = date;

        list.removeChild(element);

    }

    function onDone(element, name, note, date) {
        list.removeChild(element);

        let li = createLi(name, note, date);
        document.getElementById('events-list').appendChild(li);
        
    }

    function createLi(name, note, date) {
        // Create the main list item element
        const listItem = document.createElement('li');
        listItem.classList.add('event-item');
      
        // Create the article element
        const article = document.createElement('article');
      
        // Create the name paragraph
        const nameParagraph = document.createElement('p');
        nameParagraph.textContent = `Name: ${name}`;
      
        // Create the note paragraph
        const noteParagraph = document.createElement('p');
        noteParagraph.textContent = `Note: ${note}`;
      
        // Create the date paragraph
        const dateParagraph = document.createElement('p');
        dateParagraph.textContent = `Date: ${date}`;
      
        // Append paragraphs to the article
        article.appendChild(nameParagraph);
        article.appendChild(noteParagraph);
        article.appendChild(dateParagraph);
      
        // Append the article to the list item
        listItem.appendChild(article);
      
        // Return the created list item element
        return listItem;
      }

    function createEventItem(name, note, date) {
        // Create the main list item element
        const listItem = document.createElement('li');
        listItem.classList.add('event-item');
      
        // Create the event container div
        const eventContainer = document.createElement('div');
        eventContainer.classList.add('event-container');
      
        // Create the article element
        const article = document.createElement('article');
      
        // Create the name paragraph
        const nameParagraph = document.createElement('p');
        nameParagraph.textContent = `Name: ${name}`;
      
        // Create the note paragraph
        const noteParagraph = document.createElement('p');
        noteParagraph.textContent = `Note: ${note}`;
      
        // Create the date paragraph
        const dateParagraph = document.createElement('p');
        dateParagraph.textContent = `Date: ${date}`;
      
        // Append paragraphs to the article
        article.appendChild(nameParagraph);
        article.appendChild(noteParagraph);
        article.appendChild(dateParagraph);
      
        // Create the buttons div
        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');
      
        // Create the edit button
        const editButton = document.createElement('button');
        editButton.classList.add('btn', 'edit');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => (onEdit(listItem, name, note, date)));
      
        // Create the done button
        const doneButton = document.createElement('button');
        doneButton.classList.add('btn', 'done');
        doneButton.textContent = 'Done';
        doneButton.addEventListener('click', () => (onDone(listItem, name, note, date)));
      
        // Append buttons to the buttons div
        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(doneButton);
      
        // Append article and buttons div to the event container
        eventContainer.appendChild(article);
        eventContainer.appendChild(buttonsDiv);
      
        // Append the event container to the list item
        listItem.appendChild(eventContainer);
      
        // Return the created list item element
        return listItem;
      }
      
}

