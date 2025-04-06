
async function loadArticles() {
    // Get the main container
    let main = document.getElementById('main');
    let data = await getArticles();
    
    for (let article of data) {
        // Get the content of the article
        let info = await getDetailsById(article._id);

        let div = createAccordionElement(article._id, article.title, info);

        main.appendChild(div);
    }
}

// Make the function loading constantly
loadArticles();

function createAccordionElement(articleId, title, moreInfo) {
    // Create the main div element with the class "accordion"
    let accordionDiv = document.createElement('div');
    accordionDiv.className = 'accordion';
  
    // Create the head div element with the class "head"
    let headDiv = document.createElement('div');
    headDiv.className = 'head';
    accordionDiv.appendChild(headDiv);
  
    // Create the span element for the text
    let span = document.createElement('span');
    span.textContent = title;
    headDiv.appendChild(span);
  
    // Create the extra div element with the class "extra"
    let extraDiv = document.createElement('div');
    extraDiv.className = 'extra';
    extraDiv.style.display = 'none';
    accordionDiv.appendChild(extraDiv);

    // Create the button element with the class "button" and a specific ID
    let button = document.createElement('button');
    button.className = 'button';
    button.id = articleId;
    button.textContent = 'More';
    // Add event listener and pack it in function to add external parameter
    // Added the section with the content and the button itself
    button.addEventListener('click', () => onMore(extraDiv, button) );
    headDiv.appendChild(button);
  
    // Create the paragraph element inside the extra div
    let paragraph = document.createElement('p');
    paragraph.textContent = moreInfo; // Add the actual content here
    extraDiv.appendChild(paragraph);
  
    return accordionDiv;
  }

function onMore(extra, button) {
    // Check if the button is expanded
    if (extra.style.display == 'none') {
        // Make the deteails visible
        extra.style.display = 'block';
        // Make the button to Less
        button.textContent = 'Less';
    }
    else{
        extra.style.display = 'none';
        button.textContent = 'More';
    }
}

async function getArticles() {
    let res = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');

    if (!res.ok) {
        alert('Request error');
        throw new Error('Request error');
    }

    let data = await res.json();

    return Object.values(data);
}

async function getDetailsById(articleId) {
    let res = await fetch('http://localhost:3030/jsonstore/advanced/articles/details/' + articleId);

    let info = await res.json();

    // Returning only the content from the article with given id
    return info.content;
}