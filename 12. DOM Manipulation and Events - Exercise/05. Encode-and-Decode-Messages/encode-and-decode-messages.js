document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let inputMsg = document.querySelector('#encode textarea');

    let encodeBtn = document.querySelector('#encode button');
    
    let outputMsg = document.querySelector('#decode textarea');
    let decodeBtn = document.querySelector('#decode button');

    encodeBtn.addEventListener('click', encodeMessage);

    decodeBtn.addEventListener('click', decodeMessage)

    function encodeMessage(ev) {
        ev.preventDefault();

        let decodedMsg = '';

        for (let char of inputMsg.value) {
            let num = char.charCodeAt(0);
            num++;

            decodedMsg += String.fromCharCode(num);
        }

        outputMsg.value = decodedMsg;
        inputMsg.value = '';
    }

    function decodeMessage(ev) {
        ev.preventDefault();

        let encodedMsg = '';

        for (let char of outputMsg.value) {
            let num = char.charCodeAt(0);
            num--;

            encodedMsg += String.fromCharCode(num);
        }

        outputMsg.value = encodedMsg;
    }
}