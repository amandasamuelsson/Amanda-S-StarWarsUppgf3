var storedMovieUrl = localStorage.getItem("url");
getDetail(storedMovieUrl);
function getDetail(storedMovieUrl) {
    $.get(storedMovieUrl, function (character) {
        $(".characters").append(`<p><b>Name</b>: ${character.name}</p>`);
        $(".characters").append(`<p><b>Height</b>: ${character.height}</p>`);
        $(".characters").append(`<p><b>Gender</b>: ${character.gender}</p>`);
    });
}
  $.get(storedMovieUrl, function (data) {
      $(data.results).each(function (i, character) {
          $(".characters").append(
              `
              <h3 class="title">
              <a class="info_link" href="detail.html?url=${character.url}" onclick="Store('${character.url}')" >${character.height}</a>           
              </h3>
              <p>${character.opening_crawl}</p>
              <p>Director: ${character.director}</p>
              `
          );
      });
  });