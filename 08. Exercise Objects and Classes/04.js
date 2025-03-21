function movies(data) {
    let movies = [];

    for (info of data) {
        let words = info.split(' ');

        let movie = {};
        if (info.startsWith('addMovie')) {
            movie.name = info.slice(9,);
            movies.push(movie);
        }
        else if (info.includes('directedBy')) {
            let str = info.split(' directedBy ');
            for (let m of movies) {
                if (m.name == str[0]) {
                    m.director = str[1];
                }
            }
        }
        else if (info.includes('onDate')) {
            let str = info.split(' onDate ');
            for (let m of movies) {
                if (m.name == str[0]) {
                    m.date = str[1];
                }
            }
        }

    
    }

    for (let movie of movies) {
        if ("name" in movie && "director" in movie && "date" in movie) {
            console.log(JSON.stringify(movie));
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    );