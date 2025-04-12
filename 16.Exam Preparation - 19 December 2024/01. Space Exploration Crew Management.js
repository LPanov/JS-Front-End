function solve(input) {
    let n = input.shift();
    let astronauts = [];

    for (let i = 0; i < n; i++) {
        let astronaut = {};
        let data = input.shift().split(' ');

        astronaut.name = data[0];
        astronaut.station = data[1];
        let skillsSet = data[2].split(',');
        astronaut.skills = skillsSet;

        astronauts.push(astronaut);
    }

    while (input[0] != 'End') {
        let line = input.shift();
        let token = line.split(' / ');
        let command = token[0];
        let name = token[1];
        let astronaut = astronauts.find(a => a.name == name);

        if (command == 'Perform') {
            let station = token[2];
            let skill = token[3];

            if (astronaut.station == station && astronaut.skills.includes(skill)) {
                console.log(`${name} has successfully performed the skill: ${skill}!`);
            } else {
                console.log(`${name} cannot perform the skill: ${skill}.`);
            }

        } else if (command == 'Transfer'){
            let newStation = token[2];

            astronaut.station = newStation;
            console.log(`${name} has been transferred to: ${newStation}`);

        } else if (command == 'Learn Skill'){
            let newSkill = token[2];
            
            if (astronaut.skills.includes(newSkill)) {
                console.log(`${name} already knows the skill: ${newSkill}.`)
            } else {
                astronaut.skills.push(newSkill);
                console.log(`${name} has learned a new skill: ${newSkill}.`)
            }
        }
    }

    for (let astronaut of astronauts) {
        let skills = astronaut.skills.sort((a, b) => a.localeCompare(b)).join(', ');
        console.log(`Astronaut: ${astronaut.name}, Section: ${astronaut.station}, Skills: ${skills}`);
    }
}

solve (
    [
        "2",
        "Alice command_module piloting,communications",
        "Bob engineering_bay repair,maintenance",
        "Perform / Alice / command_module / piloting",
        "Perform / Bob / command_module / repair",
        "Learn Skill / Alice / navigation",
        "Perform / Alice / command_module / navigation",
        "Transfer / Bob / command_module",
        "Perform / Bob / command_module / maintenance",
        "End"
      ]
      
);

solve (
    [
        "3",
        "Tom engineering_bay construction,maintenance",
        "Sara research_lab analysis,sampling",
        "Chris command_module piloting,communications",
        "Perform / Tom / engineering_bay / construction",
        "Learn Skill / Sara / robotics",
        "Perform / Sara / research_lab / robotics",
        "Transfer / Chris / research_lab",
        "Perform / Chris / research_lab / piloting",
        "Learn Skill / Tom / diagnostics",
        "Perform / Tom / engineering_bay / diagnostics",
        "End"
      ]
      
)
