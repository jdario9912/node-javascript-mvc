DROP DATABASE IF EXISTS  moviesdb;

CREATE DATABASE moviesdb;

use moviesdb;

-- movie

DROP TABLE IF EXISTS movie;

CREATE TABLE IF NOT EXISTS movie (
  id BINARY(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID())),
  title VARCHAR(255) NOT NULL,
  year INT NOT NULL,
  director VARCHAR(255) NOT NULL,
  duration INT NOT NULL,
  poster TEXT,
  rate DECIMAL(2, 1) UNSIGNED NOT NULL
);


-- genre

DROP TABLE IF EXISTS genre;

CREATE TABLE IF NOT EXISTS genre (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL UNIQUE
);


-- movie_genre

DROP TABLE IF EXISTS movie_genres;

CREATE TABLE movie_genres (
  movie_id BINARY(16) REFERENCES movie(id),
  genre_id INT REFERENCES genre(id),
  PRIMARY KEY (movie_id, genre_id)
);


-- inserts

INSERT INTO movie (id, title, year, director, duration, poster, rate) VALUES
(UUID_TO_BIN(UUID()), "Interestellar", 1994, "Christopher Nolan", 180, "poster interestelar", 8.8),
(UUID_TO_BIN(UUID()), "The Shawshank Redemption", 1994, "Frank Darabont", 180, "poster the shawshank redemption", 7.3),
(UUID_TO_BIN(UUID()), "Titanic", 1999, "Alguien", 180, "poster titanic", 9.0);

INSERT INTO genre (name) VALUES
("Drama"),
("Action"),
("Crime"),
("Adventure"),
("Sci-Fi"),
("Romance");

INSERT INTO movie_genres (movie_id, genre_id) VALUES
((SELECT id FROM movie WHERE title = "Interestellar"),(SELECT id FROM genre WHERE name = "Sci-Fi")),
((SELECT id FROM movie WHERE title = "The Shawshank Redemption"),(SELECT id FROM genre WHERE name = "Drama")),
((SELECT id FROM movie WHERE title = "Titanic"),(SELECT id FROM genre WHERE name = "Romance"));


-- selects

-- esta consulta devuelve los id en el formato uuid
-- si no se hace la conversion, lo devuelve en formato blob. 
SELECT *, BIN_TO_UUID(id) id FROM movie;
-- esta seria la consulta normal
SELECT * FROM movie;