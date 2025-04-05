document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let buttons = document.querySelectorAll('button');
    
    for (let button of buttons) {
        button.addEventListener('click', showHideMore);
    }

    function showHideMore(ev) {
        let profile = ev.target.parentElement;

        let isLocked = profile.querySelector('[type=radio]').checked;

        if (isLocked) {
            return;
        }
        
        
        let hiddenField =  profile.querySelector('.hidden-fields');

        if (hiddenField.style.display == 'block') {
            hiddenField.style.display = 'none';
            ev.target.textContent = 'Show more';
        }
        else {
            hiddenField.style.display = 'block';
            ev.target.textContent = 'Show less'; 
        }

    }
}