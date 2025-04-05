document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let submit = document.querySelector('[type=submit]');

    submit.addEventListener('click', addOption);

    function addOption(ev) {
        ev.preventDefault();

        let option = document.createElement('option');

        option.textContent = document.getElementById('newItemText').value;
        option.value = document.getElementById('newItemValue').value;

        document.getElementById('menu').appendChild(option);

        document.getElementById('newItemText').value = '';
        document.getElementById('newItemValue').value = '';
    }

}