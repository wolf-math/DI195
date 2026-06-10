-- In the table actors, write the following commands:

-- Update the first name of Matt Damon to Maty
UPDATE actors SET first_name='Maty' WHERE first_name='Matt' AND last_name='Damon';

-- Update the number of oscars of George Clooney to 4, and return the updated record
UPDATE actors SET number_oscars = 4 WHERE actor_id = 2
returning first_name, last_name, number_oscars
;

-- Rename the age column by birthdate

ALTER TABLE actors RENAME COLUMN age TO dob;
Select * from actors ;

-- Delete one actor and return it

DELETE FROM actors WHERE actor_id=8 returning *;


UPDATE actors SET first_name='Matt' WHERE first_name='Matt' AND last_name='Damon';