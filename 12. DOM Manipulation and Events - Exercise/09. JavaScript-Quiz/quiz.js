document.addEventListener('DOMContentLoaded', solve);

function solve() {
  let points = 0;
  let questions = document.querySelectorAll('.question');
  let answers = document.getElementsByClassName('quiz-answer');
  
  for (let answer of answers) {
    answer.addEventListener('click', addPoints);
  }
 
  function addPoints(ev) {
    let qstn = ev.target.parentNode.parentNode;
    let results = document.getElementById('results');
    results.style.display = 'none';

    let h1 = document.createElement('h1');

    if (isCorrect(ev.target.textContent)) {
      points++;
    }

    for (let i = 0; i < 3; i++) {
      if(questions[i] == qstn) {
        questions[i].classList.add('hidden');
        if (i+1 < 3) {
          questions[i+1].classList.remove('hidden');
        }
        else {
          results.style.display = 'block';
          results.appendChild(h1);
        }
      }
    }

    if (points == 3) {
      h1.textContent = "You are recognized as top JavaScript fan!";
    }
    else if (points == 2 || points == 0) {
      h1.textContent = `You have ${points} right answers`
      
    }
    else {
      h1.textContent = "You have 1 right answer";
    }
    
  }
 
  function isCorrect(text) {
    if (text == 'onclick' ||
        text == 'JSON.stringify()' ||
        text == 'A programming API for HTML and XML documents') {
      return true
    }

    return false;
  }

}