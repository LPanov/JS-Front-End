function inventory(data) {

    let heroes = [];

    for (let d of data) {
        let str = d.split(' / ');

        let hero = {};
        hero.Hero = str[0];
        hero.level = str[1];
        hero.items = str[2];

        heroes.push(hero);
    }

    heroes.sort((a, b) => a.level - b.level);

    for (let hero of heroes) {
        let entries = Object.entries(hero);
        for (let [key, value] of entries) {
            if (key == 'Hero') {
                console.log(key + ': ' + value)
            }
            else {
                console.log(key + ' => ' + value)
            }
        }
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
    );