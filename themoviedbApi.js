const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTkwNDIzNDY3ODZhOTIxY2E3MzJmZmM0YzAxYTIxZiIsIm5iZiI6MTcyMTgwNzc3MC40NTAyNzcsInN1YiI6IjY2YTBhN2VhZjdhMTE0YTA4M2UwZDRhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SQjgB9waWCim1CPQFSbrHehebcAcr4uDQV8iIYgIrps",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    let movies = data.results;

    const moviesContainer = document.querySelector(".movies-container");
    const sortButton = document.querySelector("#sort-by-popularity");

    sortButton.addEventListener("click", () => {
      movies.sort((a, b) => b.popularity - a.popularity);
      console.log(movies);
      renderMovies(movies, moviesContainer);
    });

    renderMovies(movies, moviesContainer);
  })
  .catch((error) => {
    console.error("Error fetching movie data:", error);
  });

function renderMovies(movies, container) {
  container.innerHTML = "";

  movies.forEach((movie) => {
    const movieBox = document.createElement("div");
    movieBox.classList.add("box");

    const movieImage = document.createElement("div");
    movieImage.classList.add("box-img");

    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    img.alt = movie.title;
    img.classList.add("movie-img");

    const movieInfo = document.createElement("div");
    movieInfo.classList.add("movie-info");

    const movieTitle = document.createElement("span");
    movieTitle.classList.add("movie-list-item-title");
    movieTitle.textContent = movie.title;

    const movieDescription = document.createElement("p");
    movieDescription.classList.add("movie-list-item-desc");

    const words = movie.overview.split(" ");
    if (words.length > 20) {
      movieDescription.textContent = words.slice(0, 20).join(" ") + "...";
    } else {
      movieDescription.textContent = movie.overview;
    }

    const movieBottom = document.createElement("div");
    movieBottom.classList.add("movie-list-item-bottom");

    const fireDiv = document.createElement("div");
    fireDiv.classList.add("fire");

    const fireImg = document.createElement("img");
    fireImg.src = "img/fire.png";
    fireImg.alt = "Fire";
    fireImg.classList.add("movie-list-item-fire");

    const fireText = document.createElement("span");
    fireText.textContent = movie.popularity;

    fireDiv.appendChild(fireImg);
    fireDiv.appendChild(fireText);
    movieBottom.appendChild(fireDiv);

    movieInfo.appendChild(movieTitle);
    movieInfo.appendChild(movieDescription);
    movieInfo.appendChild(movieBottom);

    movieImage.appendChild(img);
    movieImage.appendChild(movieInfo);
    movieBox.appendChild(movieImage);
    container.appendChild(movieBox);
  });
}
