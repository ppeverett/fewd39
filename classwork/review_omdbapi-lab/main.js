// what happens after I hit submit on the form?
//  1. on the form add an event listener ==> this is to disregard the default action (sending info to a server)
// a. on the form
var form = document.querySelector("#movie-search-form");
// b. add event listener
form.addEventListener("submit", formSubmitted)
// c. to prevent default action for the form
function formSubmitted(event){
  event.preventDefault();
//  2. in order to search the omdb database, we need to access it with a URL
//    2a.create URL by concanenating the "http://www.omdbapi.com/?s=" + whatever is the value in the input field"
//  3. make a request to omdb for info (ajax call and JSON results are returned).
  var query = document.querySelector("#query")
  var url = "http://www.omdbapi.com/?s=" + query.value;
  $.get(url, movieResults);
}

function movieResults(results){
  var movieArray = results.Search
  //for each item in the array, you will place that ONE item into the displayMovie function
  movieArray.forEach(displayMovie)
}

function displayMovie (movie) {
  // create four elements
    var item = document.createElement("li");
    var movie = document.createElement("div");
    var link = document.createElement("a");
    var release = document.createElement("div");
  // set text Content to TITLE and RELEASE DATE on my DOM
    var name = movie["Title"];
    movie.textContent = name;
    var year = movie["Year"]
    release.textContent = year;

  // set Attributes such as classes, href, target on my newly created elements
    item.setAttribute("class", "movie");
    movie.setAttribute("class", "movie-title");
    release.setAttribute("class", "movie-release-date");

    var urlIMDB = "http://www.imdb.com/title/" + movie["imdbID"];
    link.setAttribute("href",urlIMDB);
    link.setAttribute("target", "_blank");

  // append it to the appropriate parent to show on the DOM
    item.appendChild(movie);
    item.appendChild(release);
    movie.appendChild(link);

    var ul = document.querySelector("#movies");
    ul.appendChild(item);

}


//

// Review of callback functions that we've seen:
//  1. $.get(url, callbackfunction) = $.get(url, movieResults) ==> (using '$.get' jquery function, you "get" the data from the URL and place the data into the next function to run)
//  2. form.addEventListener(runsomething) = form.addEventListener(formSubmitted) ==> (add an event listener on the form, and "on submit" of this form, do the next function)
//  3. array.forEach(dosomething) = array.forEach(displayEachMovie) ==> (for each item in the array, take one of those items and do something)

// displayEachMovie function
//   1. create 4 elements (li, div, div, a)
//   2. set attributes to all of those elements (class="movie", href=url...)
//   3. append the element created to appropriate partent for it to show up on the DOM
