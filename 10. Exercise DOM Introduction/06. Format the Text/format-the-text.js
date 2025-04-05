function solve() {
  let text = document.getElementById('input').value;
  let sentence = text.split('.').filter(s => s.trim() !== '');

  let result = [];

  for (let i = 0; i < sentence.length; i+=3) {
    let paragraphSentence = sentence.slice(i, i + 3).map(s => s.trim() + '.').join(' ');
    let paragraph = `<p>${paragraphSentence}</p>`;
    result.push(paragraph);
  }

  document.getElementById('output').innerHTML = result.join('\n');
}