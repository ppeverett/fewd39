var form = document.querySelector("#movie-search-form");
//$("movie-search-form").on("submit", formSubmitted)
form.addEventListener("submit", formSubmitted);

function formSubmitted(event) {
  event.preventDefault();
  var query = document.querySelector("#query").value;
  var url = "http://omdbapi.com/?s=" + query;
  $get(url, resultsReceived);
}

function resultsReceived(results) {
  //alternative lines 14-15:
  //var array = results["Search"];
  // arrayResults.forEach(displayMovie);
  results["Search"].forEach(displayMovie);
}

function displayMovie(movie) {
  
}
