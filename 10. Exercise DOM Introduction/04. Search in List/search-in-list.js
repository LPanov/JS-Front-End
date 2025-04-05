function solve() {
    let towns = document.getElementById('towns');
    let search = document.getElementById('searchText');
    let output = document.getElementById('result');

    let pattern = search.value;
    let matches = 0;
    let rows = towns.children;

    for (let row of rows) {
        if (row.textContent.includes(pattern) && pattern != '') {
            row.style.fontWeight = 'bold';
            row.style.textDecoration = 'underline';
            matches++;
        }
        else {
            row.style.fontWeight = '';
            row.style.textDecoration = '';  
        }
    }

    output.textContent = `${matches} matches found`;

}