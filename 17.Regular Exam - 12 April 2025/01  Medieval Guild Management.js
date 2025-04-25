function solve(input) {
    let n = input.shift();
    let members = [];

    for (let i = 0; i < n; i++) {
        let member = {};
        let data = input.shift().split(' ');

        member.name = data[0];
        member.role = data[1];
        let skillsSet = data[2].split(',');
        member.skills = skillsSet;

        members.push(member);
    }

    while (input[0] != 'End') {
        let line = input.shift();
        let token = line.split(' / ');
        let command = token[0];
        let name = token[1];
        let member = members.find(a => a.name == name);

        if (command == 'Perform') {
            let role = token[2];
            let skill = token[3];

            if (member.role == role && member.skills.includes(skill)) {
                console.log(`${name} has successfully performed the skill: ${skill}!`);
            } else {
                console.log(`${name} cannot perform the skill: ${skill}.`);
            }

        } else if (command == 'Reassign'){
            let newRole = token[2];

            member.role = newRole;
            console.log(`${name} has been reassigned to: ${newRole}`);

        } else if (command == 'Learn Skill'){
            let newSkill = token[2];
            
            if (member.skills.includes(newSkill)) {
                console.log(`${name} already knows the skill: ${newSkill}.`)
            } else {
                member.skills.push(newSkill);
                console.log(`${name} has learned a new skill: ${newSkill}.`)
            }
        }
    }

    for (let member of members) {
        let skills = member.skills.sort((a, b) => a.localeCompare(b)).join(', ');
        console.log(`Guild Member: ${member.name}, Role: ${member.role}, Skills: ${skills}`);
    }
    
}

solve([
    "3",
    "Arthur warrior swordsmanship,shield",
    "Merlin mage fireball,teleport",
    "Gwen healer healing,alchemy",
    "Perform / Arthur / warrior / swordsmanship",
    "Perform / Merlin / warrior / fireball",
    "Learn Skill / Gwen / purification",
    "Perform / Gwen / healer / purification",
    "Reassign / Merlin / healer",
    "Perform / Merlin / healer / teleport",
    "End"
  ]
  );

solve([
    "4",
    "Lancelot knight jousting,swordplay",
    "Morgana sorceress dark_magic,illusion",
    "Robin archer archery,stealth",
    "Galahad paladin healing,swordplay",
    "Perform / Robin / archer / archery",
    "Perform / Morgana / knight / illusion",
    "Learn Skill / Lancelot / swordplay",
    "Learn Skill / Robin / tracking",
    "Learn Skill / Robin / tracking",
    "Reassign / Galahad / warrior",
    "Perform / Galahad / warrior / healing",
    "Reassign / Galahad / healer",
    "Perform / Galahad / healer / healing",
    "End"
    ]
  );