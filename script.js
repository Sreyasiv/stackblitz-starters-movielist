let movieArray = [];
function addMovie() {
  const movieInput = document.getElementById('movieInput').value;
  if (movieInput) {
    movieArray.push(movieInput);
    displayMovie();
    document.getElementById('movieInput').value = '';
  }
  function displayMovie() {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';
    for (let i = 0; i < movieArray.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = movieArray[i];
      listItem.onclick = function () {
        removeMovie(i);
      };
      movieList.appendChild(listItem);
    }
  }
  function removeMovie(index) {
    movieArray.splice(index, 1);
    displayMovie();
  }
}
