function roadRadar(speed, area) {
    let speedLimit;

    if (area == 'motorway') speedLimit = 130;
    else if (area == 'interstate') speedLimit = 90;
    else if (area == 'city') speedLimit = 50;
    else if (area == 'residential') speedLimit = 20;

    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
    else if (speed > speedLimit && speed <= speedLimit + 20) {
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - speeding`);
    }
    else if (speed > speedLimit + 20 && speed <= speedLimit + 40) {
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
    }
    else if (speed > speedLimit + 40) {
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
    }
}