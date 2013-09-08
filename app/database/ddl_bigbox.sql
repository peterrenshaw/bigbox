-- #===
-- # name: ddl_bigbox.sql
-- # date: 2013SEP06
-- # prog: pr
-- # desc: Data Definition Language for BigBox
-- #       sqlite tables
-- # use:  sqlite3 bigbox.db < ddl_bigbox.sql
-- #===


-- #---
-- # Person: describes a person
-- #---
CREATE TABLE Person (
    id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    nick_name TEXT,              -- used if no twitter?
    twitter TEXT,                -- @address
    email_one TEXT,              -- most often used
    www, TEXT,                   -- web address
    email_two TEXT,              -- backup
    phone_mobile TEXT,           -- fist contact
    phone_land TEXT,             -- backup
    bio TEXT                     -- biography
);


-- #---
-- # Entry: an entry line in BigBox
-- #---
CREATE TABLE Entry (
    id  INTEGER PRIMARY KEY,
    line TEXT,                   -- entry line into BB
    date_time DATETIME,          -- when
    length INTEGER,              -- precalc length
    flagged INTEGER             -- flag to show or not show
);

-- #---
-- # Status_type: measure of importance
-- #---
CREATE TABLE Status_type (
    id INTEGER PRIMARY KEY,
    count INTEGER,
    description TEXT
);

-- #---
-- # Quality_type: measure of validity
-- #---
CREATE TABLE Quality_type (
    id INTEGER PRIMARY KEY,
    count INTEGER,
    description TEXT
);



-- #---
-- # Entry_Person: Find a) given entry, find perons authour
-- #                    b) all entries by person
-- #---
CREATE TABLE Entry_Person (
    person_id INTEGER,
    entry_id INTEGER
);

-- #---
-- # Entry_Status: Find a) all entries of N status
-- #                    b) grade entries by status
-- #                    c) given entry, find status
-- #---
CREATE TABLE Entry_Status (
    entry_id INTEGER,
    status_id INTEGER
);

