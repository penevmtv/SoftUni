// Write a function that stores information about movies inside an array. The movie's object info must be name, director,
//  and date. You can receive several types of input:
// •	"addMovie {movie name}" – add the movie
// •	"{movie name} directedBy {director}" – check if the movie exists and then add the director
// •	"{movie name} onDate {date}" – check if the movie exists and then add the date
// At the end print all the movies that have all the info (if the movie has no director, name, or date, don’t print it) in JSON format.





function movies(inputArray) {
    let arrayOfMovies = [];
    for (let element of inputArray) {
        if (element.includes(`addMovie`)) {
            let movieName = element.split(`addMovie `)[1];
            
            arrayOfMovies.push({name: movieName});
            
        } else if (element.includes(`directedBy`)) {
            let [movieName, director] = element.split(` directedBy `);
            
            let movie = arrayOfMovies.find(searchingMovie => searchingMovie.name === movieName);
            if (movie) {
                movie.director = director;
            }
        } else if (element.includes(`onDate`)) {
            let [movieName, date] = element.split(` onDate `);
            let movie = arrayOfMovies.find(searchingMovie => searchingMovie.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    }
    
    for (let movieObj of arrayOfMovies) {
        if (movieObj.name && movieObj.director && movieObj.date) {
            console.log(JSON.stringify(movieObj));
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