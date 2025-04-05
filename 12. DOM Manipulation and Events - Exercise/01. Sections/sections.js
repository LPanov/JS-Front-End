document.addEventListener('DOMContentLoaded', solve);

function solve()   { 

   let submitBtn = document.querySelector('input[type="submit"]');

   submitBtn.addEventListener('click', addSections);

   function addSections(ev) {
      ev.preventDefault();

      let data = document.querySelector('input[type="text"]').value.split(', ');

      for (let text of data) {
         let section = document.createElement('div');

         let str = document.createElement('p');
         str.textContent = text;
         
         section.appendChild(str);
         document.getElementById('content').appendChild(section);
      }
   }
}