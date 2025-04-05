document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let table = document.querySelector('tbody');
    let rows = table.rows;
    let values = [];
    let rightNums = [
                    [1, 2, 3],
                    [3, 1, 2],
                    [2, 3, 1]];
     

    let check = document.querySelector('.buttons [type=submit]');
    check.addEventListener('click', quickCheck);
    let clear = document.querySelector('.buttons [type=reset]');
    clear.addEventListener('click', clearAll);

    function clearAll(ev) {
        document.getElementById('check').textContent = '';
    }

    function quickCheck(ev) {
        ev.preventDefault();

        for (let i = 0; i < rows.length; i++) {
            const rowData = [];
            const cells = rows[i].cells;
        
            for (let j = 0; j < cells.length; j++) {
              const inputElement = cells[j].querySelector('input[type="number"]');
              if (inputElement) {
                rowData.push(parseInt(inputElement.value)); // Get the value and convert to a number
              } else {
                rowData.push(null); // Or handle the case where the input is missing
              }
            }
            values.push(rowData);
          }

          if (areEqual(rightNums, values)) {
            document.querySelector('table').style.border = '2px solid green';
            document.getElementById('check').textContent = 'Success!';
          }
          else {
            document.querySelector('table').style.border = '2px solid red';
            document.getElementById('check').textContent = 'Keep trying ...';
          }
    }

    function areEqual(matrix1, matrix2) {
        for (let i = 0; i < matrix1.length; i++) {
            for (let j = 0; j < matrix1[i].length; j++) {
              if (matrix1[i][j] !== matrix2[i][j]) {
                return false;
              }
            }
          }
        
          return true;
        }
    }
    