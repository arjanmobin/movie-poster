$(document).ready(function(){
  const titleInput = $('#movie-title');
  const poster = $("#poster");
  const title = $("#title")

  titleInput.on('keydown', function(e){
    if (e.key === "Enter") {
      const movieTitle = encodeURIComponent(titleInput.val());
      titleInput.val("");
      console.log(movieTitle);

      // window.location.replace("/")
        $.get(`/movieInfo?movieTitle=${movieTitle}`, function(response){
            poster.attr("src", response.poster);
            title.innerText = response.mTitle;
        });
    }
  });
});
