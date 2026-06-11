CREATE TABLE countries (
    country_id INT PRIMARY KEY,
    country_name VARCHAR(100)
);

INSERT INTO countries (country_id, country_name)
VALUES
(1, 'USA'),
(2, 'UK'),
(3, 'France'),
(4, 'Israel'),
(7, 'Italy'),
(8, 'Canada');

SELECT *
FROM actors
INNER JOIN countries
ON actors.actor_id = countries.country_id;

SELECT *
FROM actors
RIGHT OUTER JOIN countries
ON actors.actor_id = countries.country_id;