function solve(data) {
    let n = Number(data.shift());
    let farmers = [];

    for (let i = 0; i < n; i++) {
        let input = data.shift().split(' ');
        let tasks = input[2].split(',');

        let farmer = {};
        farmer.name = input[0];
        farmer.area = input[1];
        farmer.tasks = tasks;

        farmers.push(farmer);
    }

    let token = data.shift().split(' / ');
    while(token[0] != 'End') {
        let farmerName = token[1];
        let farmerArea = token[2];
        let farmerTask = token[3];
        let farmer = farmers.find(f => f.name == farmerName);
        // console.log(farmer.name);

        if (token[0] == 'Execute') {
            if (farmer.area == farmerArea && farmer.tasks.includes(farmerTask)) {
                console.log(`${farmerName} has executed the task: ${farmerTask}!`);
            } else {
                console.log(`${farmerName} cannot execute the task: ${farmerTask}.`);
            }
        } else if (token[0] == 'Change Area') {
            farmer.area = farmerArea;
            console.log(`${farmerName} has changed their work area to: ${farmerArea}`)
        } else if (token[0] == 'Learn Task') {
            let farmerTask = token[2];
            if (farmer.tasks.includes(farmerTask)) {
                console.log(`${farmerName} already knows how to perform ${farmerTask}.`);
            } else {
                farmer.tasks.push(farmerTask);
                console.log(`${farmerName} has learned a new task: ${farmerTask}.`);
            }
        } 
        token = data.shift().split(' / ');
    }

    for (let farmer of farmers) {
        let orderedTasks = farmer.tasks.sort((a, b) => a.localeCompare(b)).join(', ');

        console.log(`Farmer: ${farmer.name}, Area: ${farmer.area}, Tasks: ${orderedTasks}`);
    }
    
}

solve(  [
    "2",
    "John garden watering,weeding",
    "Mary barn feeding,cleaning",
    "Execute / John / garden / watering",
    "Execute / Mary / garden / feeding",
    "Learn Task / John / planting",
    "Execute / John / garden / planting",
    "Change Area / Mary / garden",
    "Execute / Mary / garden / cleaning",
    "End"
  ]
  
  );

solve([
    "3",
    "Alex apiary harvesting,honeycomb",
    "Emma barn milking,cleaning",
    "Chris garden planting,weeding",
    "Execute / Alex / apiary / harvesting",
    "Learn Task / Alex / beeswax",
    "Execute / Alex / apiary / beeswax",
    "Change Area / Emma / apiary",
    "Execute / Emma / apiary / milking",
    "Execute / Chris / garden / watering",
    "Learn Task / Chris / pruning",
    "Execute / Chris / garden / pruning",
    "End"
  ]
  );