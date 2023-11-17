document.addEventListener("DOMContentLoaded", () => {
    console.log("Oi amorzinho!!!!!!!")
    console.log("Espero que goste desse projeto!");
    console.log("Fiz com muito carinho heheheheh <3");
    console.log("VASCO DA GAMA");
});

const movieList = [];

function addMovie() {
  const movieTitleInput = document.getElementById("movie-title");
  const movieTitle = movieTitleInput.value.trim();

  if (movieTitle) {
    if (movieList.includes(movieTitle)) {
      alert("Este filme já foi adicionado.");
      return;
    }
    movieList.push(movieTitle);
    movieTitleInput.value = '';

    renderMovieList();
  } else {
    alert("Por favor, insira um título de filme.");
  }
}

function clearMovieList() {
    movieList.length = 0;
    renderMovieList();
}

function renderMovieList() {
  const movieListElement = document.getElementById("movie-list");
  
  movieListElement.innerHTML = '';

  movieList.forEach((movieTitle) => {
    const movieListItem = document.createElement("li");
    movieListItem.textContent = movieTitle;
    movieListElement.appendChild(movieListItem);
  });
}

function pickRandomMovie() {
  if (movieList.length === 0) {
    alert("A lista de filmes está vazia.");
    return;
  }
  
  const randomIndex = Math.floor(Math.random() * movieList.length);
  
  const randomMovie = movieList[randomIndex];
  alert(`Seu filme escolhido foi: ${randomMovie}`);
}
