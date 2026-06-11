# Supabase dvdrental import chunks

Run these files in order in the Supabase SQL editor. Each file is a complete copy/paste unit; do not paste partial statements.

- `00_schema.sql` (23 KB)
- `01_seed_country_city_address_etc.sql` (110 KB)
- `02_seed_film.sql` (196 KB)
- `03_seed_film_staff_store_etc.sql` (272 KB)
- `04_seed_inventory_film_actor.sql` (268 KB)
- `05_seed_film_actor_film_category_rental.sql` (245 KB)
- `06_seed_rental.sql` (246 KB)
- `07_seed_rental.sql` (246 KB)
- `08_seed_rental.sql` (246 KB)
- `09_seed_rental.sql` (247 KB)
- `10_seed_rental.sql` (248 KB)
- `11_seed_rental.sql` (247 KB)
- `12_seed_rental_payment.sql` (263 KB)
- `13_seed_payment.sql` (246 KB)
- `14_seed_payment.sql` (245 KB)
- `15_seed_payment.sql` (242 KB)
- `16_seed_payment.sql` (77 KB)
- `17_finalize_constraints_sequences.sql` (23 KB)


Fix note: v2 moves functions and views to the end of 00_schema.sql so Supabase does not try to compile functions before their referenced tables exist.
