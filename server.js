const express = require('express');
const hbs = require('hbs');
const path = require('path');
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index.hbs');
});
//

app.get("/movieInfo", function(req, res){
  const movieTitle = req.query.movieTitle;
  const apiKey = process.env.API_KEY;


  axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${movieTitle}`)
      .then(function(response){
          if(response.data.Search[0]){
              let movie = response.data.Search[0];
              console.log(movie)
              res.json({
                  mTitle: response.data.Search[0].Poster,
                  poster: movie.Poster

              });
          }

          else{
              res.send("<h1>No Movies Found</h1>")
          }
      })
      .catch(function(error){
        console.log(error);
      })

});

app.listen(port, () => {
  console.log("Serber Running");
});
