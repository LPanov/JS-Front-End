function toggle() {
    let button = document.getElementsByClassName("button")[0];
    let text = document.getElementById("extra");


    if (text.style.display == 'block') {
        button.onClick = text.style.display = 'none';
        button.textContent = 'More';
    } else {
        button.onClick = text.style.display = 'block';
        button.textContent = 'Less';
    }
    

}