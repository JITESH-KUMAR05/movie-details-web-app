let api = "http://www.omdbapi.com/?apikey=ce6730d2&t="


let title = document.getElementById("title")
let actors = document.getElementById("actors")
let awards = document.getElementById("Awards");
let boxoffice = document.getElementById("Boxoffice");
let country = document.getElementById("Country");
let dvd = document.getElementById("DVD");
let director = document.getElementById("Director");
let genre = document.getElementById("Genre");
let language = document.getElementById("Language");
let plot = document.getElementById("Plot");
let runtime = document.getElementById("Runtime");
let writer = document.getElementById("Writer");
let year = document.getElementById("Year");
let imdbRating = document.getElementById("imdbRating");
let poster = document.getElementById("poster")
function search(){
    moviename = document.getElementById('movie-name')
    let querry = api + moviename.value
    fetch(querry).then((querry)=>{
        return querry.json()
    }).then((querry)=>{
        title.innerText = querry.Title
        actors.innerText = querry.Actors
        awards.innerText = querry.Awards
        boxoffice.innerText = querry.BoxOffice
        country.innerText = querry.Country
        dvd.innerText = querry.DVD
        director.innerText = querry.Director
        genre.innerText = querry.Genre
        language.innerText = querry.Language
        plot.innerText = querry.Plot
        runtime.innerText = querry.Runtime
        writer.innerText = querry.Writer
        year.innerText = querry.Year
        imdbRating.innerText = querry.imdbRating
        poster.src = querry.Poster
        
    })
}