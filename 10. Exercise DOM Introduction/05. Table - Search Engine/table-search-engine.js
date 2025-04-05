function solve() {
   let list = document.querySelectorAll('.container tbody tr');
   let pattern = document.getElementById('searchField').value;

   for (let row of list) {
      if (row.textContent.includes(pattern) && pattern != '') {
         row.classList.add('select');
      }
      else {
         row.classList.remove('select');
      }
   }

   pattern = '';
}