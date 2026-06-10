DELETE FROM actors WHERE actor_id=7
RETURNING actor_id, first_name, last_name, number_oscars;