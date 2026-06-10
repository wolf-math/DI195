UPDATE actors 
SET age='1970-03-01' 
WHERE first_name='Matt' AND last_name='Damon'
RETURNING -- <- like a select
    actor_id,
    first_name, 
    last_name,
    age;