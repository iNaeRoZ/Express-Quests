const express = require("express");
require("dotenv").config();

const app = express();

const movieControllers = require("./controllers/movieControllers");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);

const port = process.env.APP_PORT;

module.exports = app;
