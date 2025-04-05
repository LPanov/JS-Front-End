document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let inputs = document.querySelectorAll('input[type="number"]').textContent;

    let buttons = document.querySelectorAll('input[type="submit"]');

    for (let button of buttons) {
        button.addEventListener('click', convertTime);

    }

    let days = document.getElementById('days-input');
    let hours = document.getElementById('hours-input');
    let minutes = document.getElementById('minutes-input');
    let seconds = document.getElementById('seconds-input');

    function convertTime(ev) {
        ev.preventDefault();

        let currentEvent = ev.currentTarget.parentElement.id;

        if (currentEvent == 'days') {
            let value = Number(days.value);
            days.value = value.toFixed(2);
            hours.value = (value * 24).toFixed(2);
            minutes.value = (value * 1440).toFixed(2);
            seconds.value = (value * 86400).toFixed(2);
        }
        else if (currentEvent == 'hours') {
            let value = Number(hours.value);
            days.value = (value / 24).toFixed(2);
            hours.value = value.toFixed(2);
            minutes.value = (value * 60).toFixed(2);
            seconds.value = (value * 3600).toFixed(2);
        }
        else if (currentEvent == 'minutes') {
            let value = Number(minutes.value);
            days.value = (value / 1440).toFixed(2);
            hours.value = (value / 60).toFixed(2);
            minutes.value = value.toFixed(2);
            seconds.value = (value * 60).toFixed(2);
        }
        else if (currentEvent == 'seconds') {
            let value = Number(seconds.value);
            days.value = (value / 86400).toFixed(2);
            hours.value = (value / 3600).toFixed(2);
            minutes.value = (value / 60).toFixed(2);
            seconds.value = value.toFixed(2);
        }
    }
}