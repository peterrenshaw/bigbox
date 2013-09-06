-- #===
-- # name: input_status_type.sql
-- # date: 2013SEP06
-- # prog: pr
-- # desc: sql queries for status types 
-- #===



-- #---
-- # USAGE: IN:  sqlite3 bigbox.db < ddl-bigbox.sql
-- #        IN:  sqlite3 bigbox.db < entry_status_type.sql
-- #        OUT: sqlite3 -header -column -echo ddl-bigbox.db < entry_status_type.sql
-- #---

-- #---
-- # Status_type: based on https://en.wikipedia.org/wiki/INFOCON
-- #---
INSERT INTO Status_type (count, description)
VALUES (1, 'Immediate Action');
INSERT INTO Status_type (count, description)
VALUES (2, 'Action');
INSERT INTO Status_type (count, description)
VALUES (3, 'Review: risk identified');
INSERT INTO Status_type (count, description)
VALUES (4, 'Monitor: potential risk');
INSERT INTO Status_type (count, description)
VALUES (5, 'No Action');
