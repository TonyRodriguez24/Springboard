SELECT *
FROM roles r
RIGHT JOIN movies m
ON r.movie_id = m.id;