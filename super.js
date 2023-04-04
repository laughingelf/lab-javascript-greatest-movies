const movies = [
    {
        title: 'La battaglia di Algeri',
        year: 1966,
        director: 'Gillo Pontecorvo',
        duration: '2h 1min',
        genre: ['Drama', 'War'],
        score: 8.1
    },
    {
        title: 'Ah-ga-ssi',
        year: 2016,
        director: 'Chan-wook Park',
        duration: '2h 24min',
        genre: ['Crime', 'Drama', 'Mystery', 'Romance', 'Thriller'],
        score: 8.1
    },
    {
        title: 'Piscores of the Caribbean: The Curse of the Black Pearl',
        year: 2003,
        director: 'Gore Verbinski',
        duration: '2h 23min',
        genre: ['Action', 'Adventure', 'Fantasy'],
        score: 8
    },
    {
        title: 'PK',
        year: 2014,
        director: 'Rajkumar Hirani',
        duration: '2h 33min',
        genre: ['Comedy', 'Drama', 'Fantasy', 'Sci-Fi'],
        score: 8.2
    },
    {
        title: 'Dog Day Afternoon',
        year: 1975,
        director: 'Sidney Lumet',
        duration: '2h 5min',
        genre: ['Biography', 'Crime', 'Drama', 'Thriller'],
        score: 8
    },
    {
        title: 'Dead Poets Society',
        year: 1989,
        director: 'Peter Weir',
        duration: '2h 8min',
        genre: ['Comedy', 'Drama'],
        score: 8
    }
]



function turnHoursToMinutes(moviesArray) {
    let empty = 0
    let movieTime = moviesArray.map((movie) => {
        let movDuration = movie.duration.replace(/[^0-9]/g, "");
        return movDuration
    })
    const calculatedTime = movieTime.forEach(element => {
        // let totalTime = 
        console.log(Number(element.slice(1)) + Number(element.slice(0, 1)))
        return empty += (Number(element.slice(1)) + Number(element.slice(0, 1) * 60))
    });
    // console.log(empty)
    return empty
}

movieDuration = turnHoursToMinutes(movies)
console.log(movieDuration)





