function attachEvents() {
    document.getElementById('submit').addEventListener('click', onSend);
    document.getElementById('refresh').addEventListener('click', loadMessages);
}

attachEvents();

async function loadMessages() {
    let messageArea = document.getElementById('messages');
    messageArea.replaceChildren();

    let messages = await getAllMessages();

    let output = messages.map(m => `${m.author}: ${m.content}`);

    messageArea.value = output.join('\n');
}

async function onSend(ev) {
    ev.preventDefault();

    let author = document.getElementsByName('author')[0].value;
    let content = document.getElementsByName('content')[0].value;

    if (!author || !content) {
        return;
    }

    await postMessage(author, content);

    author = '';
    content = '';
}

async function getAllMessages() {
    let res = await fetch('http://localhost:3030/jsonstore/messenger');

    if (!res.ok) {
        alert('Request error');
        throw new Error('Request error');
    }

    let data = await res.json();

    return Object.values(data);

}

async function postMessage(author, content) {
    let message = {
        author,
        content
    };

    let option =  {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(message) // Convert JavaScript object to JSON string
      };

      await fetch('http://localhost:3030/jsonstore/messenger', option);
}