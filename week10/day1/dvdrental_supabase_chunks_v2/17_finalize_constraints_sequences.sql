-- Run this last. Adds triggers/foreign keys and resets sequences.


SELECT setval('public.actor_actor_id_seq', 200, true);
SELECT setval('public.address_address_id_seq', 605, true);
SELECT setval('public.category_category_id_seq', 16, true);
SELECT setval('public.city_city_id_seq', 600, true);
SELECT setval('public.country_country_id_seq', 109, true);
SELECT setval('public.customer_customer_id_seq', 599, true);
SELECT setval('public.film_film_id_seq', 1000, true);
SELECT setval('public.inventory_inventory_id_seq', 4581, true);
SELECT setval('public.language_language_id_seq', 6, true);
SELECT setval('public.payment_payment_id_seq', 32098, true);
SELECT setval('public.rental_rental_id_seq', 16049, true);
SELECT setval('public.staff_staff_id_seq', 2, true);
SELECT setval('public.store_store_id_seq', 2, true);

COMMIT;

--
-- Name: actor actor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'actor_pkey' AND conrelid = 'public.actor'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.actor
    ADD CONSTRAINT actor_pkey PRIMARY KEY (actor_id);';
    END IF;
END;
$$;


--
-- Name: address address_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'address_pkey' AND conrelid = 'public.address'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.address
    ADD CONSTRAINT address_pkey PRIMARY KEY (address_id);';
    END IF;
END;
$$;


--
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'category_pkey' AND conrelid = 'public.category'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (category_id);';
    END IF;
END;
$$;


--
-- Name: city city_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'city_pkey' AND conrelid = 'public.city'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.city
    ADD CONSTRAINT city_pkey PRIMARY KEY (city_id);';
    END IF;
END;
$$;


--
-- Name: country country_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'country_pkey' AND conrelid = 'public.country'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.country
    ADD CONSTRAINT country_pkey PRIMARY KEY (country_id);';
    END IF;
END;
$$;


--
-- Name: customer customer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'customer_pkey' AND conrelid = 'public.customer'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pkey PRIMARY KEY (customer_id);';
    END IF;
END;
$$;


--
-- Name: film_actor film_actor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'film_actor_pkey' AND conrelid = 'public.film_actor'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.film_actor
    ADD CONSTRAINT film_actor_pkey PRIMARY KEY (actor_id, film_id);';
    END IF;
END;
$$;


--
-- Name: film_category film_category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'film_category_pkey' AND conrelid = 'public.film_category'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.film_category
    ADD CONSTRAINT film_category_pkey PRIMARY KEY (film_id, category_id);';
    END IF;
END;
$$;


--
-- Name: film film_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'film_pkey' AND conrelid = 'public.film'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.film
    ADD CONSTRAINT film_pkey PRIMARY KEY (film_id);';
    END IF;
END;
$$;


--
-- Name: inventory inventory_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'inventory_pkey' AND conrelid = 'public.inventory'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.inventory
    ADD CONSTRAINT inventory_pkey PRIMARY KEY (inventory_id);';
    END IF;
END;
$$;


--
-- Name: language language_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'language_pkey' AND conrelid = 'public.language'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.language
    ADD CONSTRAINT language_pkey PRIMARY KEY (language_id);';
    END IF;
END;
$$;


--
-- Name: payment payment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'payment_pkey' AND conrelid = 'public.payment'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.payment
    ADD CONSTRAINT payment_pkey PRIMARY KEY (payment_id);';
    END IF;
END;
$$;


--
-- Name: rental rental_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'rental_pkey' AND conrelid = 'public.rental'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.rental
    ADD CONSTRAINT rental_pkey PRIMARY KEY (rental_id);';
    END IF;
END;
$$;


--
-- Name: staff staff_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'staff_pkey' AND conrelid = 'public.staff'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.staff
    ADD CONSTRAINT staff_pkey PRIMARY KEY (staff_id);';
    END IF;
END;
$$;


--
-- Name: store store_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'store_pkey' AND conrelid = 'public.store'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.store
    ADD CONSTRAINT store_pkey PRIMARY KEY (store_id);';
    END IF;
END;
$$;


--
-- Name: film_fulltext_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX IF NOT EXISTS film_fulltext_idx ON public.film USING gist (fulltext);


--
-- Name: idx_actor_last_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX IF NOT EXISTS idx_actor_last_name ON public.actor USING btree (last_name);


--
-- Name: idx_fk_address_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX IF NOT EXISTS idx_fk_address_id ON public.customer USING btree (address_id);


--
-- Name: idx_fk_city_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX IF NOT EXISTS idx_fk_city_id ON public.address USING btree (city_id);


--
-- Name: idx_fk_country_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX IF NOT EXISTS idx_fk_country_id ON public.city USING btree (country_id);


--
-- Name: idx_fk_customer_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX IF NOT EXISTS idx_fk_customer_id ON public.payment USING btree (customer_id);


--
-- Name: idx_fk_film_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX IF NOT EXISTS idx_fk_film_id ON public.film_actor USING btree (film_id);


--
-- Name: idx_fk_inventory_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX IF NOT EXISTS idx_fk_inventory_id ON public.rental USING btree (inventory_id);


--
-- Name: idx_fk_language_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX IF NOT EXISTS idx_fk_language_id ON public.film USING btree (language_id);


--
-- Name: idx_fk_rental_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX IF NOT EXISTS idx_fk_rental_id ON public.payment USING btree (rental_id);


--
-- Name: idx_fk_staff_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX IF NOT EXISTS idx_fk_staff_id ON public.payment USING btree (staff_id);


--
-- Name: idx_fk_store_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX IF NOT EXISTS idx_fk_store_id ON public.customer USING btree (store_id);


--
-- Name: idx_last_name; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX IF NOT EXISTS idx_last_name ON public.customer USING btree (last_name);


--
-- Name: idx_store_id_film_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX IF NOT EXISTS idx_store_id_film_id ON public.inventory USING btree (store_id, film_id);


--
-- Name: idx_title; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX IF NOT EXISTS idx_title ON public.film USING btree (title);


--
-- Name: idx_unq_manager_staff_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX idx_unq_manager_staff_id ON public.store USING btree (manager_staff_id);


--
-- Name: idx_unq_rental_rental_date_inventory_id_customer_id; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX idx_unq_rental_rental_date_inventory_id_customer_id ON public.rental USING btree (rental_date, inventory_id, customer_id);


--
-- Name: film film_fulltext_trigger; Type: TRIGGER; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'film_fulltext_trigger' AND tgrelid = 'public.film'::regclass) THEN
        EXECUTE 'CREATE TRIGGER film_fulltext_trigger BEFORE INSERT OR UPDATE ON public.film FOR EACH ROW EXECUTE PROCEDURE tsvector_update_trigger(''fulltext'', ''pg_catalog.english'', ''title'', ''description'');';
    END IF;
END;
$$;


--
-- Name: actor last_updated; Type: TRIGGER; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'last_updated' AND tgrelid = 'public.actor'::regclass) THEN
        EXECUTE 'CREATE TRIGGER last_updated BEFORE UPDATE ON public.actor FOR EACH ROW EXECUTE PROCEDURE public.last_updated();';
    END IF;
END;
$$;


--
-- Name: address last_updated; Type: TRIGGER; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'last_updated' AND tgrelid = 'public.address'::regclass) THEN
        EXECUTE 'CREATE TRIGGER last_updated BEFORE UPDATE ON public.address FOR EACH ROW EXECUTE PROCEDURE public.last_updated();';
    END IF;
END;
$$;


--
-- Name: category last_updated; Type: TRIGGER; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'last_updated' AND tgrelid = 'public.category'::regclass) THEN
        EXECUTE 'CREATE TRIGGER last_updated BEFORE UPDATE ON public.category FOR EACH ROW EXECUTE PROCEDURE public.last_updated();';
    END IF;
END;
$$;


--
-- Name: city last_updated; Type: TRIGGER; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'last_updated' AND tgrelid = 'public.city'::regclass) THEN
        EXECUTE 'CREATE TRIGGER last_updated BEFORE UPDATE ON public.city FOR EACH ROW EXECUTE PROCEDURE public.last_updated();';
    END IF;
END;
$$;


--
-- Name: country last_updated; Type: TRIGGER; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'last_updated' AND tgrelid = 'public.country'::regclass) THEN
        EXECUTE 'CREATE TRIGGER last_updated BEFORE UPDATE ON public.country FOR EACH ROW EXECUTE PROCEDURE public.last_updated();';
    END IF;
END;
$$;


--
-- Name: customer last_updated; Type: TRIGGER; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'last_updated' AND tgrelid = 'public.customer'::regclass) THEN
        EXECUTE 'CREATE TRIGGER last_updated BEFORE UPDATE ON public.customer FOR EACH ROW EXECUTE PROCEDURE public.last_updated();';
    END IF;
END;
$$;


--
-- Name: film last_updated; Type: TRIGGER; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'last_updated' AND tgrelid = 'public.film'::regclass) THEN
        EXECUTE 'CREATE TRIGGER last_updated BEFORE UPDATE ON public.film FOR EACH ROW EXECUTE PROCEDURE public.last_updated();';
    END IF;
END;
$$;


--
-- Name: film_actor last_updated; Type: TRIGGER; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'last_updated' AND tgrelid = 'public.film_actor'::regclass) THEN
        EXECUTE 'CREATE TRIGGER last_updated BEFORE UPDATE ON public.film_actor FOR EACH ROW EXECUTE PROCEDURE public.last_updated();';
    END IF;
END;
$$;


--
-- Name: film_category last_updated; Type: TRIGGER; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'last_updated' AND tgrelid = 'public.film_category'::regclass) THEN
        EXECUTE 'CREATE TRIGGER last_updated BEFORE UPDATE ON public.film_category FOR EACH ROW EXECUTE PROCEDURE public.last_updated();';
    END IF;
END;
$$;


--
-- Name: inventory last_updated; Type: TRIGGER; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'last_updated' AND tgrelid = 'public.inventory'::regclass) THEN
        EXECUTE 'CREATE TRIGGER last_updated BEFORE UPDATE ON public.inventory FOR EACH ROW EXECUTE PROCEDURE public.last_updated();';
    END IF;
END;
$$;


--
-- Name: language last_updated; Type: TRIGGER; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'last_updated' AND tgrelid = 'public.language'::regclass) THEN
        EXECUTE 'CREATE TRIGGER last_updated BEFORE UPDATE ON public.language FOR EACH ROW EXECUTE PROCEDURE public.last_updated();';
    END IF;
END;
$$;


--
-- Name: rental last_updated; Type: TRIGGER; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'last_updated' AND tgrelid = 'public.rental'::regclass) THEN
        EXECUTE 'CREATE TRIGGER last_updated BEFORE UPDATE ON public.rental FOR EACH ROW EXECUTE PROCEDURE public.last_updated();';
    END IF;
END;
$$;


--
-- Name: staff last_updated; Type: TRIGGER; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'last_updated' AND tgrelid = 'public.staff'::regclass) THEN
        EXECUTE 'CREATE TRIGGER last_updated BEFORE UPDATE ON public.staff FOR EACH ROW EXECUTE PROCEDURE public.last_updated();';
    END IF;
END;
$$;


--
-- Name: store last_updated; Type: TRIGGER; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'last_updated' AND tgrelid = 'public.store'::regclass) THEN
        EXECUTE 'CREATE TRIGGER last_updated BEFORE UPDATE ON public.store FOR EACH ROW EXECUTE PROCEDURE public.last_updated();';
    END IF;
END;
$$;


--
-- Name: customer customer_address_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'customer_address_id_fkey' AND conrelid = 'public.customer'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_address_id_fkey FOREIGN KEY (address_id) REFERENCES public.address(address_id) ON UPDATE CASCADE ON DELETE RESTRICT;';
    END IF;
END;
$$;


--
-- Name: film_actor film_actor_actor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'film_actor_actor_id_fkey' AND conrelid = 'public.film_actor'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.film_actor
    ADD CONSTRAINT film_actor_actor_id_fkey FOREIGN KEY (actor_id) REFERENCES public.actor(actor_id) ON UPDATE CASCADE ON DELETE RESTRICT;';
    END IF;
END;
$$;


--
-- Name: film_actor film_actor_film_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'film_actor_film_id_fkey' AND conrelid = 'public.film_actor'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.film_actor
    ADD CONSTRAINT film_actor_film_id_fkey FOREIGN KEY (film_id) REFERENCES public.film(film_id) ON UPDATE CASCADE ON DELETE RESTRICT;';
    END IF;
END;
$$;


--
-- Name: film_category film_category_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'film_category_category_id_fkey' AND conrelid = 'public.film_category'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.film_category
    ADD CONSTRAINT film_category_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(category_id) ON UPDATE CASCADE ON DELETE RESTRICT;';
    END IF;
END;
$$;


--
-- Name: film_category film_category_film_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'film_category_film_id_fkey' AND conrelid = 'public.film_category'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.film_category
    ADD CONSTRAINT film_category_film_id_fkey FOREIGN KEY (film_id) REFERENCES public.film(film_id) ON UPDATE CASCADE ON DELETE RESTRICT;';
    END IF;
END;
$$;


--
-- Name: film film_language_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'film_language_id_fkey' AND conrelid = 'public.film'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.film
    ADD CONSTRAINT film_language_id_fkey FOREIGN KEY (language_id) REFERENCES public.language(language_id) ON UPDATE CASCADE ON DELETE RESTRICT;';
    END IF;
END;
$$;


--
-- Name: address fk_address_city; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_address_city' AND conrelid = 'public.address'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.address
    ADD CONSTRAINT fk_address_city FOREIGN KEY (city_id) REFERENCES public.city(city_id);';
    END IF;
END;
$$;


--
-- Name: city fk_city; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_city' AND conrelid = 'public.city'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.city
    ADD CONSTRAINT fk_city FOREIGN KEY (country_id) REFERENCES public.country(country_id);';
    END IF;
END;
$$;


--
-- Name: inventory inventory_film_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'inventory_film_id_fkey' AND conrelid = 'public.inventory'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.inventory
    ADD CONSTRAINT inventory_film_id_fkey FOREIGN KEY (film_id) REFERENCES public.film(film_id) ON UPDATE CASCADE ON DELETE RESTRICT;';
    END IF;
END;
$$;


--
-- Name: payment payment_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'payment_customer_id_fkey' AND conrelid = 'public.payment'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.payment
    ADD CONSTRAINT payment_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customer(customer_id) ON UPDATE CASCADE ON DELETE RESTRICT;';
    END IF;
END;
$$;


--
-- Name: payment payment_rental_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'payment_rental_id_fkey' AND conrelid = 'public.payment'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.payment
    ADD CONSTRAINT payment_rental_id_fkey FOREIGN KEY (rental_id) REFERENCES public.rental(rental_id) ON UPDATE CASCADE ON DELETE SET NULL;';
    END IF;
END;
$$;


--
-- Name: payment payment_staff_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'payment_staff_id_fkey' AND conrelid = 'public.payment'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.payment
    ADD CONSTRAINT payment_staff_id_fkey FOREIGN KEY (staff_id) REFERENCES public.staff(staff_id) ON UPDATE CASCADE ON DELETE RESTRICT;';
    END IF;
END;
$$;


--
-- Name: rental rental_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'rental_customer_id_fkey' AND conrelid = 'public.rental'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.rental
    ADD CONSTRAINT rental_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customer(customer_id) ON UPDATE CASCADE ON DELETE RESTRICT;';
    END IF;
END;
$$;


--
-- Name: rental rental_inventory_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'rental_inventory_id_fkey' AND conrelid = 'public.rental'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.rental
    ADD CONSTRAINT rental_inventory_id_fkey FOREIGN KEY (inventory_id) REFERENCES public.inventory(inventory_id) ON UPDATE CASCADE ON DELETE RESTRICT;';
    END IF;
END;
$$;


--
-- Name: rental rental_staff_id_key; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'rental_staff_id_key' AND conrelid = 'public.rental'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.rental
    ADD CONSTRAINT rental_staff_id_key FOREIGN KEY (staff_id) REFERENCES public.staff(staff_id);';
    END IF;
END;
$$;


--
-- Name: staff staff_address_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'staff_address_id_fkey' AND conrelid = 'public.staff'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.staff
    ADD CONSTRAINT staff_address_id_fkey FOREIGN KEY (address_id) REFERENCES public.address(address_id) ON UPDATE CASCADE ON DELETE RESTRICT;';
    END IF;
END;
$$;


--
-- Name: store store_address_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'store_address_id_fkey' AND conrelid = 'public.store'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.store
    ADD CONSTRAINT store_address_id_fkey FOREIGN KEY (address_id) REFERENCES public.address(address_id) ON UPDATE CASCADE ON DELETE RESTRICT;';
    END IF;
END;
$$;


--
-- Name: store store_manager_staff_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'store_manager_staff_id_fkey' AND conrelid = 'public.store'::regclass) THEN
        EXECUTE 'ALTER TABLE ONLY public.store
    ADD CONSTRAINT store_manager_staff_id_fkey FOREIGN KEY (manager_staff_id) REFERENCES public.staff(staff_id) ON UPDATE CASCADE ON DELETE RESTRICT;';
    END IF;
END;
$$;


--
--
