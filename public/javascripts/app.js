$(document).ready(function(){
  const titleInput = $('#movie-title');
  const poster = $("#poster");
  const title = $("#title");
  const year  = $("#year");

  titleInput.on('keydown', function(e){
    if (e.key === "Enter") {
      const movieTitle = encodeURIComponent(titleInput.val());
      titleInput.val("");
      console.log(movieTitle);

      $.get(`/movieInfo?movieTitle=${movieTitle}`, function(response){
        poster.attr("src", response.poster);
        title.html(response.name);
        year.html(response.year);
      });
    }
  });
});
