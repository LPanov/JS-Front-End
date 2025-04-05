document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let input = document.getElementById('inputDistance');
    let output = document.getElementById('outputDistance');

    let inUnit = document.getElementById('inputUnits');
    let outUnit = document.getElementById('outputUnits');

    let convert = document.getElementById('convert');

    convert.addEventListener('click', convertDistance);

    function convertDistance(ev) {
        ev.preventDefault();

        let number = convertToMeters(Number(input.value), inUnit.selectedIndex);
        number = convertFromMeters(number, outUnit.selectedIndex);

        output.value = number;
    }

    function convertToMeters(value, unit) {
        let meters;
      
        switch (unit) {
          case 1:
            meters = value;
            break;
          case 0:
            meters = value * 1000;
            break;
          case 2:
            meters = value / 100;
            break;
          case 3:
            meters = value / 1000;
            break;
          case 7:
            meters = value * 0.0254;
            break;
          case 6:
            meters = value * 0.3048;
            break;
          case 5:
            meters = value * 0.9144;
            break;
          case 4:
            meters = value * 1609.34;
            break;
        }
      
        return meters;
      }

      function convertFromMeters(meters, targetUnit) {
        let value;
      
        switch (targetUnit) {
          case 1:
            value = meters;
            break;
          case 0:
            value = meters / 1000;
            break;
          case 2:
            value = meters * 100;
            break;
          case 3:
            value = meters * 1000;
            break;
          case 7:
            value = meters / 0.0254;
            break;
          case 6:
            value = meters / 0.3048;
            break;
          case 5:
            value = meters / 0.9144;
            break;
          case 4:
            value = meters / 1609.34;
            break;
        }
      
        return value;
      }
    
    
}