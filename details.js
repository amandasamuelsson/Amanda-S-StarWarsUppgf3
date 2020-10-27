var storedMovieUrl = localStorage.getItem("url");
getDetail(storedMovieUrl);
function getDetail(storedMovieUrl) {
    $.get(storedMovieUrl, function (item) {
        $(".title").append(`<p> ${item.title}</p>`);
        $(".director").append(`<p> ${item.director}</p>`);
        $(".about").append(`<p> ${item.opening_crawl}</p>`);

        $(item.characters).slice(0, 5).each(function (i, characterUrl) {
            $.get(characterUrl, function (character) {
                $(".characters").append(
                    `
                        <a class="info_link" href="character.html?url=${character.url}" onclick="Store('${character.url}')" >${character.name}</a>           
                    `);
                $(".characters").append(`<hr>`);
        
            });    
        });
    });  
}
getDetail();
function Store(url) {
    localStorage.setItem("url", url);
}