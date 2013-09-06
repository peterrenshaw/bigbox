-- #===
-- # name: input_quality_type.sql
-- # date: 2013SEP06
-- # prog: pr
-- # desc: sql queries for information quality types 
-- #===



-- #---
-- # USAGE: IN:  sqlite3 bigbox.db < ddl-bigbox.sql
-- #        OUT: sqlite3 -header -column -echo ddl-bigbox.db < query.sql
-- #---

-- #---
-- # Quality_type
-- #---
INSERT INTO Quality_type (count, description)
VALUES (1, 'Fully Verified: multiple trusted Sources');
INSERT INTO Quality_type (count, description)
VALUES (2, 'Partial Verified: one trusted Source');
INSERT INTO Quality_type (count, description)
VALUES (3, 'UN Verified Source');
INSERT INTO Quality_type (count, description)
VALUES (4, 'UN Verified Rumour');
INSERT INTO Quality_type (count, description)
VALUES (5, 'UN Verified Rumour');
