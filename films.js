$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".movies h3, p").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
 
function getMovies() {
  $.get("https://swapi.dev/api/films", function (data) {
      $(data.results).each(function (i, film) {
          $(".movies").append(
              `
              <h3 class="title">
              <a class="info_link" href="detail.html?url=${film.url}" onclick="Store('${film.url}')" >${film.title}</a>           
              </h3>
              <p>${film.opening_crawl}</p>
              <p>Director: ${film.director}</p>
              `
          );
      });
  });
}
getMovies();
function Store(url) {
  localStorage.setItem("url", url);
}



