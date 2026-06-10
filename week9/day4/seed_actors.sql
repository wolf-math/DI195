-- Add two more female actors in the table actors. Add them one by one
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Gal','Gadot','01/04/1987', 2);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Jennifer','Lopex','11/11/1979', 3);

-- Add three more actors, add all of them in one query !
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Cheese','Sandwich','03/07/2011', 11),
('Jonathan','Salamander','08/01/1958', 3),
('Audrey','Hepburn','09/05/1913', 6);

-- Retrieve everything from the table actors
SELECT * FROM actors;